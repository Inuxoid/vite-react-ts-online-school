import Button from "./Button/Button.tsx";
import React from "react";
import { Tab } from '../types.ts';
interface Tabs {
    active: Tab;
    onChange: (current: Tab) => void;
}

const TabsSection : React.FC<Tabs> = ({ active, onChange }) => {
    return (
        <section style={{marginBottom : '1rem'}}>
            <Button
                isActive={active === "main"}
                onClick={()=> onChange('main')}>
                Гланая
            </Button>
            <Button
                isActive={active === "feedback"}
                onClick={()=> onChange('feedback')}>
                Обратная связь
            </Button>
            <Button
                isActive={active === "effect"}
                onClick={()=> onChange('effect')}>
                Effect
            </Button>
        </section>
    )
}

export default  TabsSection;