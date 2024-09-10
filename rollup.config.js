import typescript from "rollup-plugin-typescript2";
import terser from "@rollup/plugin-terser";
import resolve from "@rollup/plugin-node-resolve";

const plugins = [
    typescript({
        tsconfig: "tsconfig.json",
        useTsconfigDeclarationDir: true,
    }),
    resolve(),
    terser(),
]

export default {
    plugins: plugins,
    input: "src/index.ts",
    external: ["react", "react-dom", "react/jsx-runtime"],
    output: [
        // Is ESM format
        {
            file: "dist/index.esm.js",
            format: "esm",
            sourcemap: true
        },
        // Is UMD format
        {
            file: "dist/index.umd.js",
            format: "umd",
            sourcemap: true,
            name: "ReactWidgets",
            globals: {
                "react": "React",
                "react/jsx-runtime": "React",
                "react-dom": "ReactDOM",
            }
        },
    ]
}