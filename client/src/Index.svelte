<script>
    import Router from "./Router.svelte"
    import { locale, t, addMessages, init, waitLocale } from 'svelte-intl-precompile';
  
    import en from '$locales/en.json';
    import fr from '$locales/fr.json';
    import { registerAll } from "$locales";
  
    addMessages('en', en)
    addMessages('fr', fr)
  
    const browserLang = navigator.language || "en";
    const lang = browserLang.split('-')[0];

    init({
        initialLocale: lang,
		fallbackLocale: lang
    })
</script>

<main>
    <Router/>
</main>