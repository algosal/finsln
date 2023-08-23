const commonQuestions = [
  {
    question:
      "Who is the person to attend the Assessment Meeting for This Business. Include all Information",
    answer: "",
    placeholder:
      "The person to attend this meeting is Mr./Miss. last name, first name. To reach them, call 1-123-123-1234. Their email is and the other information is...",
  },
  {
    question: "What are the key challenges you face as a Startup?",
    answer: "",
    placeholder:
      "As a Startup, we face challenges such as limited resources, competition, and building brand awareness.",
  },
  {
    question:
      "Do you have a business growth plan or expansion strategy in place?",
    answer: "",
    placeholder:
      "Yes, we have a growth plan that includes opening a new location and launching an online store to reach a wider audience.",
  },
  {
    question: "How do you currently channel sales for your business?",
    answer: "",
    placeholder:
      "We primarily channel sales through our e-commerce website and also partner with local retailers.",
  },
  {
    question:
      "What are your primary business objectives for the next year? (e.g., revenue growth, market expansion, profitability improvement)",
    answer:
      "Our main goal for the next year is to achieve rapid revenue growth through aggressive market expansion strategies.",
    placeholder: "We aim for rapid market expansion and revenue growth.",
  },
  {
    question:
      "Are there any specific milestones or targets you want to achieve?",
    answer:
      "We're targeting to secure 100,000 users within the first six months and establish partnerships with key industry players.",
    placeholder:
      "Our milestones include acquiring X users and forming partnerships with Y industry leaders.",
  },
];

const startupBusinessQuestions = [
  ...commonQuestions,
  {
    question: "What is the unique value proposition (UVP) of your startup?",
    answer:
      "Our startup offers a cutting-edge AI-powered solution that automates complex business processes, saving time and costs for our clients.",
    placeholder:
      "Our UVP lies in providing an AI-driven solution that revolutionizes business processes.",
  },
  {
    question:
      "How do you plan to attract and retain customers in the competitive startup landscape?",
    answer:
      "We'll implement a data-driven marketing strategy, leverage influencer partnerships, and focus on exceptional customer experience to retain clients.",
    placeholder:
      "Our customer acquisition strategy includes data-driven marketing and creating exceptional customer experiences.",
  },
  {
    question:
      "What is your funding strategy? How do you plan to secure investment for your startup?",
    answer:
      "We're actively seeking seed funding from angel investors and plan to participate in pitch competitions to raise capital for product development and market expansion.",
    placeholder:
      "Our funding strategy involves securing seed investment from angel investors and participating in pitch competitions.",
  },
  // ... (add more questions specific to startup businesses)
  {
    question:
      "Is there anything else you'd like to share with us that you feel is important for the growth assessment?",
    answer: "",
    placeholder:
      "We value your insights. Please feel free to share any additional information that you think is relevant for our assessment.",
  },
];

export default startupBusinessQuestions;
