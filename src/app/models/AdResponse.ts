export interface AdResponse {
    prompt: string;
    title: string;
    ideaElements: BulletPoint[];
    verboseAnalysis: OverlapAd[];
    potentialImprovements: BulletPoint[];
    suggestedIdeas: BulletPoint[];
    overallScore: number;
    hashtags: string[];
    imagePrompts: ImpagePrompt[];
}

export interface BulletPoint {
    mainPoint: string;
    minorPoints?: string[];
}

export interface OverlapAd {
    name: string;
    analysis: string;
    score: number;
}

export interface ImpagePrompt {
    storyboardSort: number;
    prompt: string;
    imageUrl?: string;
}