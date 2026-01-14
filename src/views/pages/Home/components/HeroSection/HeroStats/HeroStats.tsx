import type { ReactElement } from 'react';
import CounterAnimation from '@client-components/CounterAnimation/CounterAnimation';
import './hero-stats.scss';

type HeroStat = {
  value: number;
  label: string;
};

const STATS: HeroStat[] = [
    {
        value: 12,
        label: "jours suivis",
    },
    {
        value: 3,
        label: "en moyenne",
    },
    {
        value: 18,
        label: "repas planifiés",
    },
];

function HeroStats(): ReactElement {
    return (
        <div className='hero-stats'>
            {STATS.map((stat) => (
                <div key={stat.label} className='hero-stats_items'>
                    <CounterAnimation target={stat.value} />
                    <span className='hero-stats_item-label'>{stat.label}</span>
                </div>
            ))}
        </div>
    );
}

export default HeroStats;