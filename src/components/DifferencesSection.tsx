import Button from "./Button/Button.tsx";
import {differences} from "../data.ts";
import {useState} from "react";

function DifferencesSection() : JSX.Element {
    type ContentKey = 'way' | 'easy' | 'program';
    const [contentType, setContentType] = useState<ContentKey>();
    function handleClick(type : ContentKey) : void {
        setContentType(type);
    }
    return    (
        <section>
            <h3>
                Чем мы отличаемся от других
            </h3>
            <Button isActive={contentType === 'way'} onClick={() => handleClick("way")}>Подход</Button>
            <Button isActive={contentType === 'easy'} onClick={() => handleClick("easy")}>Доступность</Button>
            <Button isActive={contentType === 'program'} onClick={() => handleClick("program")}>Концетрация</Button>
            {!contentType && <p> Нажми на кнопку </p>}
            {contentType && <p>{differences[contentType]}</p>}
        </section>
    )
}

export default DifferencesSection;