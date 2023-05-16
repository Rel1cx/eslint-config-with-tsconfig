import { type OverrideCreator } from "eslint-config-galex/dist/types"
import { getPackageInfoSync, isPackageExists } from "local-pkg"

export { defineConfig, defineFlatConfig } from "eslint-define-config"

export const REACT_PKG_INFO = getPackageInfoSync("react")
export const TS_PKG_INFO = getPackageInfoSync("typescript")

export const resolveProject = () => {
    const project: Parameters<OverrideCreator>[0] = {
        hasJest: false,
        hasJestDom: false,
        hasNest: isPackageExists("@nestjs/common"),
        hasNodeTypes: isPackageExists("@types/node"),
        hasTailwind: isPackageExists("tailwindcss"),
        hasTestingLibrary: isPackageExists("@testing-library/react"),
        react: {
            hasReact: isPackageExists("react"),
            isCreateReactApp: false,
            isNext: isPackageExists("next"),
            isPreact: isPackageExists("preact"),
            isRemix: false,
            version: REACT_PKG_INFO?.version ?? null,
        },
        storybook: {
            hasStorybook: false,
            hasStorybookTestingLibrary: false,
        },
        typescript: {
            config: null,
            hasTypeScript: true,
            version: TS_PKG_INFO?.version ?? null,
        },
    }

    if (process.env.DEBUG?.includes("eslint")) {
        // eslint-disable-next-line no-console
        console.log("Resolved project:", project)
    }

    return project
}
