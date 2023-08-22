const initialQuestionnaire = [
  // Business Goals
  "What are your primary business objectives for the next year? (e.g., revenue growth, market expansion, profitability improvement)",
  "Are there any specific milestones or targets you want to achieve?",
  "What does success look like for your business in the long term?",

  // Current Situation
  "Can you provide an overview of your current financial position? (e.g., annual revenue, expenses, profit)",
  "Do you have any existing financial and business reports? (e.g., balance sheets, income statements)",
  "How do you assess your overall business health at the moment?",

  // Challenges
  "What are the most significant challenges or obstacles your business is currently facing?",
  "Are there specific areas where you've experienced financial or operational difficulties?",
  "Do you face competition, and if so, what differentiates you from your competitors?",

  // Expectations
  "What outcomes or results do you expect from our services?",
  "Are there any specific services or solutions you're looking for? (e.g., financial analysis, cost reduction, strategic planning)",
  "How do you envision our collaboration in addressing your business needs?",

  // Budget and Resources
  "What budget do you have allocated for business growth or financial improvement initiatives?",
  "Are there any limitations on resources (financial, human, technological) that we should consider?",
  "How do you typically allocate funds for strategic projects?",

  // Industry and Competition
  "What industry or market does your business operate in?",
  "Who are your main competitors, and what sets you apart from them?",
  "Are there any industry trends or changes that impact your business?",

  // Previous Efforts
  "Have you previously undertaken any business growth initiatives or financial management strategies?",
  "What were the outcomes of those efforts?",
  "Are there lessons learned from previous experiences that we should consider?",

  // Risk Tolerance
  "How comfortable are you with taking risks to achieve growth or financial goals?",
  "Do you have a risk management strategy in place?",
  "What level of risk are you willing to accept in pursuit of your objectives?",

  // Timeline
  "What is your preferred timeline for seeing results or reaching specific milestones?",
  "Are there any time-sensitive initiatives or projects we should prioritize?",
  "Do you have any critical deadlines we need to be aware of?",
];

const clientAnswers = [
  // Business Goals
  "Our primary objective is to achieve a 20% revenue growth next year.",
  "We aim to launch two new products and expand into a new market segment.",
  "Success for us means becoming a recognized industry leader with a strong customer base.",

  // Current Situation
  "Our annual revenue is $1.5 million with expenses of $1.2 million and a net profit of $300,000.",
  "Yes, we have balance sheets and income statements for the past two years.",
  "Overall, our business health is stable, but we believe there's room for improvement.",

  // Challenges
  "One of our challenges is increasing market competition and changing customer preferences.",
  "We've faced difficulties in optimizing our supply chain and managing cash flow.",
  "We compete with established brands by offering personalized services and innovative solutions.",

  // Expectations
  "We expect your services to provide actionable insights for revenue optimization.",
  "Specifically, we're looking for assistance in cost reduction and identifying growth opportunities.",
  "We envision a collaborative partnership where your expertise complements our business goals.",

  // Budget and Resources
  "$50,000 is allocated for business growth initiatives in the upcoming year.",
  "Resource limitations include a lean team and a budget constraint for large technology investments.",
  "We allocate funds based on a priority-driven approach, focusing on projects with high ROI.",

  // Industry and Competition
  "We operate in the technology and software services sector.",
  "Our main competitors include ABC Corp and XYZ Solutions. We differentiate by offering customizable solutions.",
  "Industry trends show a shift towards AI-driven solutions, which presents opportunities for innovation.",

  // Previous Efforts
  "We implemented a new marketing strategy that led to a 15% increase in customer acquisition.",
  "Our efforts to streamline operations resulted in a 10% cost reduction.",
  "We learned the importance of adapting quickly to market changes and staying agile.",

  // Risk Tolerance
  "We're open to calculated risks that align with our growth objectives.",
  "We have a risk management strategy that involves thorough analysis and contingency planning.",
  "We're willing to take moderate risks that have the potential for substantial rewards.",

  // Timeline
  "We'd like to start seeing results within six months and reach our growth targets within a year.",
  "There's a time-sensitive project to launch a new product by the end of this quarter.",
  "We have a critical deadline for a partnership agreement that needs to be finalized within two months.",
];

const transformedQuestionnaire = initialQuestionnaire.map((question, index) => {
  return {
    question: question,
    answer: clientAnswers[index],
    placeholder: "Placeholder answer for the question: " + question,
  };
});

export default transformedQuestionnaire;
