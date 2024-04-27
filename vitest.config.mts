import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [tsconfigPaths({ ignoreConfigErrors: true })],
  test: {
    typecheck: {
      tsconfig: "./tsconfig.json",
      include: ["**/*.test.ts"],
    },
    coverage: {
      enabled: true,
      reporter: ["text", "lcov", "html", "json"],
    },
  },
});
