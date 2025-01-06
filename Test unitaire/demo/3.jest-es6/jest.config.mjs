/** @type {import('jest').Config} */
export default {
    clearMocks: true,
    collectCoverage: true,
    coverageDirectory: "coverage",
    coverageProvider: "babel",
    testEnvironment: "node",
    coverageReporters: ["json", "text", "lcov", "clover", "html"],
};