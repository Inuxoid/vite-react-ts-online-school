import './App.css'
import Header from "./components/Header/Header.tsx";
import TeachingSection from "./components/TeachingSection.tsx";
import DifferencesSection from "./components/DifferencesSection.tsx";
import IntroSection from "./components/IntroSection.tsx";
import TabsSection from "./components/TabsSection.tsx";
import {useState} from "react";
import FeedbackSection from "./components/FeedbackSection.tsx";
import { Tab } from './types.ts';
import EffectSection from "./components/EffectSection.tsx";

function App() : JSX.Element {
    const [tab, setTab] = useState<Tab>("effect");

    return (
        <div>
            <Header />
            <main>
                <TabsSection active={tab} onChange={(current : Tab) => setTab(current)}/>
                <IntroSection />

                {tab === 'main' && (
                    <>
                        <TeachingSection />
                        <DifferencesSection />
                    </>
                )}

                {tab === 'feedback' && <FeedbackSection />}
                {tab === 'effect' && <EffectSection />}
            </main>
        </div>
    )
}
export default App
