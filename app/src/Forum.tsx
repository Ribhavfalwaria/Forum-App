// import { json } from "node:stream/consumers";
import React, { useEffect, useState, Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";
import styles from "./styles/Forum.module.css";

interface ForumProps {
  firstname: string;
  lastname: string;
}

interface obj {
  question: string;
  answer: [any];
  _id: string;
  firstname: string;
  lastname: string;
}

type sb = {
  answer: string;
  firstname: string;
  lastname: string;
};

// let id: boolean;
// type answer = [string];
export default function Forum(props: ForumProps) {
  const [apidata, setapidata] = useState<obj[]>([]);
  const [answerr, setanswerr] = useState<string>("");
  const [url, seturl] = useState<number>(0);

  let s = {
    answer: answerr,
    firstname: props.firstname,
    lastname: props.lastname,
  };
  const [fb, setfb] = useState(false);

  console.log(answerr);
  // const url = "http://localhost:9000/questions";

  useEffect(() => {
    fetch("http://localhost:9000/questions")
      .then((response) => response.json())
      .then((data) => {
        setapidata(data);
        console.log(apidata);
        return;
      });
  }, [url]);

  function send(x: string) {
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ answerr }),
    };
    fetch(`http://localhost:9000/questions/${x}`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert("User Saved successfully...");
      });
  }

  function test(a: Array<sb>) {
    a.map((s: sb) => {
      return (
        <>
          <h1>Answer: {s.answer}</h1>
          <p>
            posted by {s.firstname} {s.lastname}{" "}
          </p>
        </>
      );
    });
  }

  return (
    <div className={styles.container}>
      <>
        {apidata.map((item: obj) => {
          // setfb({item.firstname})
          // if (
          //   item.firstname === props.firstname &&
          //   item.lastname === props.lastname
          // ) {
          //   setfb(true);
          // }
          return (
            <div key={item._id} className={styles.questioncontainer}>
              <h2>Question: {item.question}</h2>
              <div>
                <p>
                  posted by {item.firstname} {item.lastname}{" "}
                </p>
              </div>
              {item.answer.map((s: sb) => {
                return (
                  <>
                    <h1>Answer: {s.answer}</h1>
                    <p>
                      posted by {s.firstname} {s.lastname}{" "}
                    </p>
                  </>
                );
              })}
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
                  seturl(url + 1);
                  const requestOptions = {
                    method: "PUT",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ answer: s }),
                  };
                  fetch(
                    `http://localhost:9000/questions/${item._id}`,
                    requestOptions
                  )
                    .then((response) => response.json())
                    .then((data) => {
                      console.log(JSON.stringify({ answer: s }));
                      alert("User Saved successfully...");
                    });
                }}
              >
                submit
              </button>
            </div>
          );
        })}
        <br />
        <div>
          <Link to="/question">
            <button className={styles.btn}>Post Your Question</button>
          </Link>
        </div>
      </>
      {/* <h1>Hello</h1> */}
    </div>
  );
}
