<script>
  import { onMount } from "svelte";
  onMount(() => {
    const s = document.createElement("script");
    const tag = document.getElementById("utterances");
    s.src = "https://utteranc.es/client.js";
    s.setAttribute("repo", "f4bra/portfolio");
    s.setAttribute("issue-term", "pathname");
    s.setAttribute("theme", "preferred-color-scheme");
    s.setAttribute("crossorigin", "anonymous");
    tag.parentNode.insertBefore(s, tag);
  });
</script>

<div id="utterances"></div>
