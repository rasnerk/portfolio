import { useEffect, useState } from "react";
import { Typing, TypingStep } from "typing-effect-reactjs";
   
const Name = () => {
  const [profession, setProfession] = useState()

    useEffect(() => {
      setTimeout(() => {
        setProfession(
          <Typing
          element="h2"
          text="< Frontend Developer />"
          shouldDelete={false}
          typeSpeed={100}
          styleClass="typing-effect"
          cursorColor="white"
          disableBlinkingOnEnd={2}
        />
        )
      }, 3500)
    },[])

  return (
    <div className="d-flex flex-column align-items-center" style={{padding: "6em 0"}}>
      <Typing
        element="h2"
        text="< Keifer Rasner />"
        shouldDelete={false}
        typeSpeed={100}
        styleClass="typing-effect"
        cursorColor="white"
        disableBlinkingOnEnd={2}
      />
      {profession}
    </div>
  );
}

export default Name