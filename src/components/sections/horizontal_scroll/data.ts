export interface HorizontalItem {
  image: string;
  title: string;
  subtitle?: string;
  text?: string;
  position?: { top?: string; left?: string; right?: string; bottom?: string; width?: string; height?: string; rotation?: number };
}

export const horizontalItems: HorizontalItem[] = [
  {
    image: '/images/horizontal/qatar-2024.webp',
    title: 'Qatar, 2024',
    subtitle: 'Victory',
    text: 'Defining moments on the track',
    position: { top: '10%', left: '5%', width: '280px', height: '350px', rotation: -3 }
  },
  {
    image: '/images/horizontal/fia-prize-2024.webp',
    title: 'FIA Prize Giving, 2024',
    subtitle: 'Recognition',
    text: 'Celebrating excellence',
    position: { top: '45%', left: '8%', width: '250px', height: '250px', rotation: 2 }
  },
  {
    image: '/images/horizontal/miami-gp-2024.webp',
    title: 'Miami GP, 2024',
    subtitle: 'Performance',
    text: 'Pushing boundaries',
    position: { top: '20%', left: '50%', width: '400px', height: '500px', rotation: -2 }
  },
  {
    image: '/images/horizontal/battersea-2024.webp',
    title: 'Battersea, 2024',
    subtitle: 'Legacy',
    text: 'Building history',
    position: { bottom: '10%', left: '0%', width: '400px', height: '300px', rotation: 2 }
  },
  {
    image: '/images/horizontal/on-track.webp',
    title: 'On Track',
    subtitle: 'Focus',
    text: 'Every second counts',
    position: { top: '15%', right: '10%', width: '200px', height: '250px', rotation: 3 }
  },
  {
    image: '/images/horizontal/championship.webp',
    title: 'Championship',
    subtitle: 'Drive',
    text: 'Racing forward',
    position: { top: '50%', right: '15%', width: '220px', height: '280px', rotation: -4 }
  },
  {
    image: '/images/horizontal/victory-lane.webp',
    title: 'Victory Lane',
    subtitle: 'Triumph',
    text: 'Winning moments',
    position: { bottom: '15%', right: '8%', width: '300px', height: '350px', rotation: 1 }
  },
  {
    image: '/images/horizontal/the-fight.webp',
    title: 'The Fight',
    subtitle: 'Determination',
    text: 'Never giving up',
    position: { top: '60%', left: '35%', width: '280px', height: '320px', rotation: -2 }
  },
  {
    image: '/images/horizontal/podium.webp',
    title: 'Podium',
    subtitle: 'Achievement',
    text: 'Reaching the top',
    position: { top: '5%', left: '30%', width: '200px', height: '240px', rotation: 4 }
  },
  {
    image: '/images/horizontal/the-track.webp',
    title: 'The Track',
    subtitle: 'Passion',
    text: 'Where it all happens',
    position: { bottom: '5%', right: '25%', width: '250px', height: '300px', rotation: -3 }
  },
  {
    image: '/images/horizontal/the-journey.webp',
    title: 'The Journey',
    subtitle: 'Progress',
    text: 'Always moving forward',
    position: { top: '35%', left: '25%', width: '300px', height: '380px', rotation: 1 }
  },
];

export const quoteItem = {
  text: "It doesn't matter where you start, it's how you progress from there.",
  position: { top: '8%', left: '50%', transform: 'translateX(-50%)', width: '600px' }
};

