export const copy = {
  acceptInviteLogIn: "Please log in to accept this invite",
  acceptInviteSignUp: "Please sign up to accept this invite",
  accountExists: "Already have an account?",
  accountNotExists: "No account yet?",
  add: "Add",
  addGitHubRepo: "Add GitHub repo",
  aka: "A.K.A.",
  alertEmail: "Email",
  alertNone: "No alerts",
  alertSlack: ({
    channel,
    team_name,
  }: {
    channel: string;
    team_name?: string | null;
  }): string => `Slack ${channel}${team_name ? ` in ${team_name}` : ""}`,
  alertTeam: "Alert your team",
  alertTeamDetail: "Receive email or Slack alerts with one click.",
  all: "All",
  allBranches: "All branches",
  apiKeyCreate: "Create API key",
  apiKeyName: "API key name",
  apiKeyWarning:
    "This key is only shown once. Store it in a safe, secure location.",
  apiKeys: "API keys",
  apiKeysDetail: "These keys allow you to authenticate API requests",
  apiKeysEmpty: "You don't have any API keys yet!",
  assignGroups: "Assign groups",
  back: "Back to dashboard",
  blog: "Blog",
  bookSession: "Book 1:1 session",
  branches: "Branches",
  branchesDetail: "Which branches do you want to test?",
  branchesPlaceholder: "Example: develop,main",
  cancel: "Cancel",
  checkEmail: "Check your email for a code",
  choosePlan: "Choose plan",
  close: "Close",
  code: "Code",
  codeLove: "Code you’ll 💖",
  codeLoveDetail:
    "Your test code uses the best selector and best-in-class open source tools.",
  communitySupport: "Community support",
  confirm: "Confirm",
  confirmDelete: (entity: string): string =>
    `Are you sure you want to delete the following ${entity}?`,
  connectToFailures: "Connect to failing tests",
  contactUs: "Contact us",
  continue: "Continue",
  copy: "Copy",
  copyFail: "Error :(",
  copySuccess: "Copied!",
  copyright: `QA Wolf, Inc. Copyright ${new Date().getFullYear()}`,
  create: "Create",
  created: "Created",
  createDisabled: "Auto create disabled",
  createFirstTest: "Create your first test",
  createGroup: "Create group",
  createOnline: "Create and run tests online",
  createStart: "Auto create code",
  createStop: "Stop creating code",
  createTagline: "Create tests at warp speed",
  createTest: "Create test",
  curious: "Curious yet?",
  custom: "Custom",
  debugEasily: "Debug easily with a video and detailed logs",
  dedicatedSupport: "Dedicated support",
  delete: "Delete",
  deleted: "(Deleted)",
  deleteGroup: "Delete group",
  deleteOk: "Yes, delete",
  deleteTests: "Delete tests",
  delightUsers: "Delight users",
  delightUsersDetail:
    "9/10 users form a bad opinion of your brand if your app does not work.",
  deploymentsDetail: "Which deployments do you want to test?",
  discoverBugs:
    "Set up browser tests in minutes to discover bugs before your users do.",
  docs: "Docs",
  done: "Done",
  easyCi: "CI without a PhD",
  easyCiDetail:
    "Run tests in QA Wolf with one click, on every deployment, or in your own CI.",
  easyDebug: "Debugging made easy",
  easyDebugDetail:
    "Debug with video, logs, and the exact line a test failed on.",
  edit: "Edit",
  email: "Email",
  emailPlaceholder: "you@awesome.com",
  emptyTests: "You don't have any tests yet!",
  emptyTestsSearch: "No tests found",
  emptyTriggers: "You don't have any triggers yet!",
  encrypted: "Encrypted",
  enterUrl: "Enter your URL to create a test with",
  envVariableDelete: "Delete environment variable",
  envVariableDeleteConfirm:
    "The following environment variable will be permanently deleted. Are you sure you want to continue?",
  envVariableNamePlaceholder: "MY_VARIABLE",
  envVariableNew: "Add variable",
  envVariableValuePlaceholder: "value",
  envVariables: "Environment variables",
  envVariablesDetail:
    "Use environment variables for values that you don’t want visible in your code or to change the behavior of your test based on the environment",
  envVariablesEmpty: "No variables added to this environment",
  environment: "Environment",
  environmentDelete: "Delete environment",
  environmentDeleteConfirm:
    "Are you sure? This will permanently delete all variables in this environment. Please type",
  environmentDeleteConfirm2: "to confirm.",
  environmentName: "Environment name",
  environmentNew: "Add environment",
  environmentNotSelected: "No environment",
  environmentsEdit: "Edit environments",
  environmentsEditDetail: "Create, rename, or delete environments",
  environmentsEmpty: "You don't have any environments",
  getInTouch: "Get in touch",
  getStarted: "Get started",
  gitHub: "GitHub",
  goHome: "Go Home",
  growRevenue: "Grow revenue",
  growRevenueDetail:
    "2/3 of consumers abandon a purchase when they find a bug.",
  helpers: "Helpers",
  history: "History",
  inProgress: "In progress",
  invalidUrl: "Please enter a valid URL",
  joinMailingList: "Join our mailing list",
  joinWolfPack: "Join the wolf pack",
  key: "Key",
  lastUsed: "Last used",
  limitReached: "Plan limit reached",
  loading: "Loading...",
  logIn: "Log in",
  logInWithEmail: "Log in with email",
  logInWithGitHub: "Log in with GitHub",
  loginCode: (mode: "logIn" | "signUp"): string =>
    `We'll email you a code to ${mode === "logIn" ? "log in" : "sign up"}`,
  loginCodeSent: "Enter the 6-letter code we sent to ",
  logOut: "Log out",
  logs: "Logs",
  loveOpenSource: "We 💖 open source",
  manageGitHubRepos: "Manage GitHub repos",
  meet: "Meet your QA Wolf",
  members: "Members:",
  myTests: "My tests",
  name: "Name",
  netlify: "Netlify",
  netlifyDeploy: "Your tests will run on Netlify deploy previews.",
  next: "Next",
  noEmail: "Please enter a valid email address",
  noHistory: "No history yet",
  noMobile:
    "Woof. We're not mobile friendly yet. Please try again on a larger screen!",
  noRuns: "Not run yet",
  noPassword: "Please provide your password",
  notFound: "(404. Page not found.)",
  notStarted: "Preparing",
  onPremise: "Run on-premise",
  openSourceDiscount:
    "Ask us about our free or discounted plans for open source projects.",
  or: "or",
  password: "Password",
  pending: "Pending",
  perUserPerMonth: "/mo per user",
  placeholderInProgress: "Test in progress...",
  placeholderInvite: "Enter emails to invite...",
  placeholderRunTest: "Run your test to see it here!",
  preview: "Preview",
  pricing: "Pricing",
  prioritySupport: "Priority support",
  production: "Production",
  qawolf: "QA Wolf",
  readDocs: "Read the docs",
  roadmap: "Roadmap",
  run: "Run",
  runOnDeployment: (repoName: string): string =>
    `Run on ${repoName} deployment`,
  runTagline: "Run tests without rocket science",
  runsFail: "Failing tests",
  runGroup: (count: number): string =>
    `Run ${count ? `${count} ` : ""}test${count === 1 ? "" : "s"}`,
  runsInProgress: "Running tests",
  runLines: (count: number): string =>
    `Run ${count} line${count === 1 ? "" : "s"}`,
  runsPass: "Passing tests",
  oneTeamMember: "1 team member",
  other: "Other",
  otherDeploy: "Don't see the tool you use? Let us know!",
  tenTeamMembers: "Up to 10 team members",
  save: "Save",
  saveTest: "Save Test",
  scheduleOnboarding: "Schedule onboarding",
  scheduleOneClick: "Schedule or run tests on deployments with one click",
  searchTests: "Search...",
  selectedBranches: "Selected branches",
  selectedBranchesInput:
    "Run tests only when these branches are deployed (comma separated list)",
  selectPlatform: "Which tool do you use to deploy?",
  sendInvites: "Send invites",
  setEnvVariables: "Set environment variables",
  share: "Share run",
  shareFail: "Error copying",
  shareSuccess: "Copied link!",
  shipConfidently: "Ship confidently",
  ship: "Ship",
  shipFeatures: "Ship features, not bugs",
  shipFeaturesDetail: "It costs 5x as much to fix a bug after it is released.",
  shipTagline: "Launch your product to new heights",
  showBrowser: "Switch to browser",
  showVideo: "Switch to video",
  signUp: "Sign up",
  signUpWithEmail: "Sign up with email",
  signUpWithGitHub: "Sign up with GitHub",
  skipBoilerplate: "Skip writing boilerplate",
  skipBoilerplateDetail:
    "Create tests 10x faster by converting your actions to code.",
  slackIntegration: "Add Slack channel",
  star: "Star",
  startTesting: "Start testing",
  startTestingFree: "Start testing for free",
  startTestingFreeDetail:
    "Ship confidently with the easiest way to set up browser tests.",
  subscribe: "Subscribe",
  subscribeError: "Something went wrong, please try again",
  subscribeSuccess: "Thanks for subscribing 🎉",
  subjectToFairUse:
    "Each plan is subject to our fair use policy. Starter plans are limited to non-commercial use.",
  teamName: "Team name:",
  teamSettings: "Settings & members",
  terms: "Terms",
  testAcrossBrowsers: "Test in Chromium, Firefox, and WebKit",
  testFail: "Fail",
  testInProgress: "Running",
  testMinutes: "Minutes",
  testPass: "Pass",
  tryForFree: "Try for free",
  upgradePlan: "Upgrade plan",
  value: "Value",
  vercel: "Vercel",
  viewLatest: "View latest",
  watchCreate: "Watch Jon create a test",
  watchTime: "in 1 minute",
  welcome: "Welcome to QA Wolf!",
  welcome2: "Sign up to create and run tests",
  wolfIntro: (wolfName: string): string => {
    return `Hi, I'm ${wolfName}!`;
  },
  woof: "Woof.",
  woof2: "Woof woof woof.",
  zeroSetup: "Zero setup",
  zeroSetupDetail:
    "Create your first test in minutes - no installation or setup required.",
};
