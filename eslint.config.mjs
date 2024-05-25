import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    languageOptions: {
      globals: {
        jQuery: "readonly",
        $: "readonly",
        mw: "readonly",
        ...globals.browser,
      }
    }
  },
  pluginJs.configs.recommended,

  {
    rules: {}
  }

];