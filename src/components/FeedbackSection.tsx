import Button from "./Button/Button.tsx";
import React, {useState} from "react";
import { FeedbackReasons } from "../types.ts"

type FormState = {
    name: string;
    hasError: boolean;
    reason: FeedbackReasons; // Использование типа FeedbackReasons для поля reason
};


function FeedbackSection() : JSX.Element {
    const [form, setForm] = useState<FormState>({
        name: '',
        hasError: true,
        reason: 'help'
    })
    // const [name, setName] = useState<string>('');
    // const [hasError, setHasError] = useState<boolean>(false);
    // const [reason, setReason] = useState<FeedbackReasons>('help');

    function handleNameChange(event : React.ChangeEvent<HTMLInputElement>) : void {
        // setName(event.target.value);
        // setHasError(event.target.value.trim().length === 0);
        setForm(prevState => ({
            ...prevState,
            name: event.target.value,
            hasError: event.target.value.trim().length === 0
        }))
    }

    return (
        <section>
            <h3>Обратная связь</h3>

            <form>
                <label htmlFor="name">Ваше имя</label>
                <input
                    id="name"
                    type="text"
                    className="control"
                    value={form.name}
                    style={{
                        border: form.hasError ? '1px solid red' : undefined
                    }}
                    onChange={handleNameChange}/>
                <label htmlFor="reason">Причина обращения</label>

                <select
                    id="reason"
                    className="control"
                    value={form.reason}
                    onChange={event=>
                        setForm(prevState =>
                            ({...prevState,
                              reason: event.target.value  as FeedbackReasons}))}>
                    <option value="error">Ошибка</option>
                    <option value="help">Нужна помощь</option>
                    <option value="suggest">Предложение</option>
                </select>

                <Button isActive={!form.hasError}
                        disabled={form.hasError}>Отправить</Button>
            </form>
        </section>
    )
}

export default FeedbackSection;