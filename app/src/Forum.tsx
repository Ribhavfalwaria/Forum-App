import React, { useEffect, useState, Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";
import styles from "./styles/Forum.module.css";
import { useNavigate } from "react-router-dom";

interface ForumProps {
  firstname: string;
  lastname: string;
  userid: string;
}

interface _questiontype {
  question: string;
  answer: [any];
  _id: string;
  firstname: string;
  lastname: string;
  userid: string;
}

type _Answertype = {
  answer: string;
  firstname: string;
  lastname: string;
};

export default function Forum(props: ForumProps) {
  const navigate = useNavigate();
  const [apidata, setapidata] = useState<_questiontype[]>([]);
  const [answerr, setanswerr] = useState<string>("");
  const [url, seturl] = useState<number>(0);

  let _answer = {
    answer: answerr,
    firstname: props.firstname,
    lastname: props.lastname,
    userid: props.userid,
  };

  useEffect(() => {
    fetch("http://localhost:9000/questions")
      .then((response) => response.json())
      .then((data) => {
        setapidata(data);
        return;
      });
  }, [url]);

  return (
    <div className={styles.container}>
      <>
        <button
          className={styles.logoutbtn}
          onClick={() => {
            sessionStorage.clear();
            navigate("/login");
          }}
        >
          LOGOUT
        </button>
        {apidata.map((item: _questiontype) => {
          if (item === null) {
            return (
              <>
                <h1>No Questions Posted </h1>
              </>
            );
          } else {
            return (
              <div key={item._id} className={styles.questioncontainer}>
                <h2>Question: {item.question}</h2>
                <div>
                  <p>
                    posted by {item.firstname} {item.lastname}{" "}
                  </p>
                </div>
                {item.answer.map((s: _Answertype) => {
                  return (
                    <>
                      <h3>Answer:{s.answer}</h3>
                      <h4>
                        Posted by : {s.firstname} {s.lastname}
                      </h4>
                    </>
                  );
                })}
                {item.userid === props.userid ? null : (
                  <>
                    <input
                      type="textbox"
                      onChange={(e) => {
                        setanswerr(e.target.value);
                      }}
                      style={{ marginLeft: "7px" }}
                    />

                    <button
                      className={styles.btn}
                      onClick={() => {
                        console.log(props.userid);

                        const requestOptions = {
                          method: "PUT",
                          headers: {
                            "Content-Type": "application/json",
                          },
                          body: JSON.stringify({ answer: _answer }),
                        };
                        fetch(
                          `http://localhost:9000/questions/${item._id}`,
                          requestOptions
                        )
                          .then((response) => response.json())
                          .then((data) => {
                            console.log(JSON.stringify({ answer: _answer }));
                            alert("User Saved successfully...");
                            seturl(url + 1);
                          });
                      }}
                    >
                      submit
                    </button>
                  </>
                )}
              </div>
            );
          }
        })}
        <br />
        <div>
          <Link to="/question">
            <button className={styles.btn} style={{ margin: "30px" }}>
              Post Your Question
            </button>
          </Link>
        </div>
      </>
    </div>
  );
}
