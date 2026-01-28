import { useState, useCallback, useRef, type ReactElement } from 'react';
import Title from '@client-components/Title/Title';
import { useScrollProgress } from '@client-hooks/useScrollProgress';
import StarShineIcon from '@client-components/icons/StarShineIcon';
import ProfilIcon from '@client-components/icons/ProfilIcon';
import ChefHatIcon from '@client-components/icons/ChefHatIcon';
import QueryStatsIcon from '@client-components/icons/QueryStatsIcon';
import GraphIcon from '@client-components/icons/GraphIcon';
import HowItWorkStep from './HowItWorkStep/HowItWorkStep';
import './how-it-work-section.scss';

type StepType = {
    step: number;
    icon: ReactElement;
    title: string;
    description: string;
};

const STEPS = [
    {
        step: 1,
        icon: <ProfilIcon />,
        title: 'Crée ton profil',
        description: "Objectif, poids actuel et cible, préférences alimentaires, niveau de motivation. 30 secondes, c'est tout.",
    },
    {
        step: 2,
        icon: <ChefHatIcon />,
        title: 'Reçois ton plan',
        description: 'Meal plans adaptés à ton budget et préférences, activités physiques simples et accessibles.',
    },
    {
        step: 3,
        icon: <QueryStatsIcon />,
        title: 'Log en 1 clic',
        description: 'Chaque jour : "As-tu suivi le plan ?" Oui ou Non. Pas de charge mentale, pas de culpabilisation.',
    },
    {
        step: 4,
        icon: <GraphIcon />,
        title: "L'app s'adapte à toi",
        description: "Chaque semaine, ton plan s'ajuste selon tes résultats. Pas de perte ? On change. Trop dur ? On simplifie.",
    },
] as const satisfies readonly StepType[];

type StepNumber = typeof STEPS[number]['step'];
type CompletedStep = 0 | StepNumber;

function HowItWorkSection(): ReactElement {
    const [maxCompletedStep, setMaxCompletedStep] = useState<CompletedStep>(0);
    const stepsRef = useRef<HTMLDivElement>(null);
    const scrollProgress = useScrollProgress(stepsRef);

    const handleStepVisible = useCallback((step: StepNumber) => {
        setMaxCompletedStep((prev) => Math.max(prev, step) as CompletedStep);
    }, []);

    return (
        <div className='how-it-work-section container'>
            <Title eyebrow={<><StarShineIcon /> Comment ça marche ?</>}>
                4 étapes simples pour atteindre ton objectif
            </Title>
            <div className='how-it-work-section__steps' ref={stepsRef}>
                <div 
                    className='how-it-work-section__progress-bar'
                    style={{ '--progress': scrollProgress }}
                />
                {STEPS.map((stepData) => (
                    <HowItWorkStep
                        key={stepData.step}
                        step={stepData.step}
                        icon={stepData.icon}
                        title={stepData.title}
                        description={stepData.description}
                        isCompleted={stepData.step <= maxCompletedStep}
                        onVisible={() => handleStepVisible(stepData.step)}
                    />
                ))}
            </div>
        </div>
    );
}

export default HowItWorkSection;