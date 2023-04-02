import { useEffect, useMemo, useState, useRef } from "react";
import "./app.css";
import Trivia from "./components/Trivia";
import Timer from "./components/Timer";
import Start from "./components/Start";

function App() {


  const [userName, setUserName] = useState(null)
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "Bayram idi gecəquşu oxurdu ...... qız bəy corabı toxurdu   ",
      answers: [
        {
          text: "dodaxlı",
          correct: false,
        },
        {
          text: "adaxlı",
          correct: true,
        },
        {
          text: " yanaxlı",
          correct: false,
        },
        {
          text: "  qazaxlı",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "Meyvələrdən 3 meyvə var mahnısında hansı meyvənin adı çəkilmir?",
      answers: [
        {
          text: "Heyva",
          correct: false,
        },
        {
          text: "Alma",
          correct: false,
        },
        {
          text: "Feyxoa",
          correct: true,
        },
        {
          text: "Nar",
          correct:  false,
        },
      ],
    },
    {
      id: 3,
      question: "Məhz bu rəssam Azərbaycan satirik karikaturasının əsasını qoymuşdur ",
      answers: [
        {
          text: "Əzim Əzimzadə ",
          correct: true,
        },
        {
          text: "Səttar Bəhlulzadə",
          correct: false,
        },
        {
          text: "Tahir Salahov",
          correct: false,
        },
        {
          text: "Toğrul Nərimanbəyov",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question: "Məhəllə filmində “Məzi”-deyə çağırılan obrazın tam adı nə idi?",
      answers: [
        {
          text: "Müzəffər",
          correct: false,
        },
        {
          text: "Mustafa",
          correct: false,
        },
        {
          text: "Maximilianus",
          correct:false,
        },
        {
          text: "Məzahir",
          correct: true,
        },
      ],
    },
    {
      id: 5,
      question: " “ Elmin şeyxi ” adını almış alim kimdir? ",
      answers: [
        {
          text: "İbn Sina",
          correct: true,
        },
        {
          text: "Aristotel",
          correct: false,
        },
        {
          text: "Herodot",
          correct: false,
        },
        {
          text: "Bəhmənyar",
          correct:false,
        },
      ],
    },
    {
      id: 6,
      question: "Hansı kimyəvi elementin adı “şüalanan” sözündən götürülüb?",
      answers: [
        {
          text: "Litum",
          correct: false,
        },
        {
          text: "Radium",
          correct: true,
        },
        {
          text: "Helium",
          correct: false,
        },
        {
          text: "Silisium",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "Bu cizgi filminin 3-cü hissəsi “Dinozavrlar erası” adlanır",
      answers: [
        {
          text: "Gecə Keşikçiləri",
          correct: false,
        },
        {
          text: "Əjdaha ovçuları",
          correct: false,
        },
        {
          text: "Buz Dövrü",
          correct: true,
        },
        {
          text: "Buzlar diyarı",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "Bizans imperiyasının varlığına hansı hökmdar son qoydu?",
      answers: [
        {
          text: "Mahmud ll Mehmet",
          correct: false,
        },
        {
          text: "Fateh ll Mahmud",
          correct: false,
        },
        {
          text: "Mahmud ll Fateh",
          correct: false,
        },
        {
          text: "Fateh ll Mehmet",
          correct: true,
        },
      ],
    },
    {
      id: 9,
      question: " Azteklər qızılı məhz bu Səma cisminin göz yaşı adlandırırdılar ",
      answers: [
        {
          text: "Günəş",
          correct: true,
        },
        {
          text: "Ay",
          correct:false,
        },
        {
          text: "Yupiter",
          correct:false,
        },
        {
          text: "Ulduzlar",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "Vikinqlər “Drakkar” adlı gəmilərinin adını məhz bu mifik canlıdan götürüblər",
      answers: [
        {
          text: "Peqasus",
          correct: false,
        },
        {
          text: "Əjdaha",
          correct: true,
        },
        {
          text: "Axilles",
          correct:false,
        },
        {
          text: "Meduza",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: " Bu musiqi alətinin adı fars dilindən sadəcə “sim” kimi tərcümə olunur?",
      answers: [
        {
          text: "Saz",
          correct: false,
        },
        {
          text: "Gitara",
          correct:false,
        },
        {
          text: "Tar",
          correct: true,
        },
        {
          text: "Skripka",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "Bu holland rəssamı “Ulduzlu gecə”rəsmini San-Remi də olarkən çəkmişdir. ",
      answers: [
        {
          text: "Vinsent Van Qoh",
          correct:true,
        },
        {
          text: "Yan Vermeer",
          correct: false,
        },
        {
          text: "Qogen",
          correct: false,
        },
        {
          text: "Rembrant",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "“ Öz göz yaşlarında üzür”,”Çayı dəlicəsinə içir”,”Xərçənglə kadril rəqsi edirlər”-bu bölmələri olan əsər Luis Kerolun hansı əsəridir?",
      answers: [
        {
          text: "Alisa güzgü arxasında",
          correct: false,
        },
        {
          text: "Silviya və Bruno",
          correct: false,
        },
        {
          text: "Alisa möcüzələr diyarında",
          correct: true,
        },
        {
          text: "Deyingənin ovu",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: ' "Tanrı qırmancı" adlanırdı?',
      answers: [
        {
          text: "Muğan xaqan",
          correct: false,
        },
        {
          text: "Mihiraqula",
          correct: true,
        },
        {
          text: "Eftal xan",
          correct: true,
        },
        {
          text: "Atilla",
          correct: true,
        },
      ],
    },
    {
      id: 15,
      question: "Hansı əlifbada sonuncu hərf omeqa adlanır?",
      answers: [
        {
          text: "Yunan",
          correct: false,
        },
        {
          text: "Latın",
          correct: false,
        },
        {
          text: "Fars",
          correct:false,
        },
        {
          text: "Ərəb",
          correct: false,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(() => 
    [
      { id: 1, amount: "$ 100" },
      { id: 2, amount: "$ 200" },
      { id: 3, amount: "$ 300" },
      { id: 4, amount: "$ 500" },
      { id: 5, amount: "$ 1000" },
      { id: 6, amount: "$ 2000" },
      { id: 7, amount: "$ 4000" },
      { id: 8, amount: "$ 8000" },
      { id: 9, amount: "$ 16000" },
      { id: 10, amount: "$ 32000" },
      { id: 11, amount: "$ 64000" },
      { id: 12, amount: "$ 125000" },
      { id: 13, amount: "$ 250000" },
      { id: 14, amount: "$ 500000" },
      { id: 15, amount: "$ 1000000" },
    ].reverse(),
   []);

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [moneyPyramid, questionNumber]);
  return (
    <div className="app">
{userName ? (

  <>
  

  <div className="main">
        {stop ? (
          <h1 className="endText">You earned:{earned} </h1>
        ) : (
          <>
            <div className="top">
              <div className="timer">
                <Timer setStop={setStop} 
                questionNumber={questionNumber}
                />
                </div>
            </div>

            <div className="bottom">
              <Trivia
                data={data}
                setStop={setStop}
                questionNumber={questionNumber}
                setQuestionNumber={setQuestionNumber}
              />
            </div>
          </>
        )}
      </div>
      <div className="pyramid">
        <ul className="moneyList">
          {moneyPyramid.map((m) => (
            <li
              className={
                questionNumber === m.id
                  ? "moneyListItem active"
                  : "moneyListItem"
              }
            >
              <span className="moneyListItemNumber"> {m.id}</span>
              <span className="moneyListItemAmount"> {m.amount}</span>
            </li>
          ))}
        </ul>
      </div>
  
  </>
) : <Start setUserName = {setUserName}/>}


    </div>
  );
}

export default App;
