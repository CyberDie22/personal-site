<script lang="ts">
	import IconLink from "$lib/components/IconLink.svelte"
    import Card from "$lib/components/Card.svelte"
    import SkillInfo from "$lib/components/SkillInfo.svelte"

    let hoveredSkill = "none"
    let unhoverLater = false

    let hoveredSet = (name: string) => {
        hoveredSkill = name
        unhoverLater = false
    }
    let unhover = () => {
        unhoverLater = true
        setTimeout(() => {
            if (unhoverLater) hoveredSet("none")
        }, 100)
    }
</script>

<svelte:head>
    <title>Skills</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css">
</svelte:head>

<div class="flex justify-center items-center pt-6">
    <Card>
        <div class="flex justify-center items-center flex-col">
            {#if hoveredSkill == "typescript"}
            <SkillInfo title="Typescript">
                <p>Typescript is a strongly typed superset of Javascript</p>
            </SkillInfo>
            {:else if hoveredSkill == "tailwindcss"}
            <SkillInfo title="TailwindCSS">
                <p>TailwindCSS is a utility CSS library that lets you build good looking websites quickly</p>
            </SkillInfo>
            {:else if hoveredSkill == "svelte"}
            <SkillInfo title="Svelte">
                <p>Svelte is a JS-in-HTML web framework that makes it easier to build complex websites without a virtual DOM</p>
            </SkillInfo>
            {:else if hoveredSkill == "kotlin"}
            <SkillInfo title="Kotlin">
                <p>Kotlin is a high-level multi-paradigm programming language that runs on the JVM, Javascript, Web Assembly, and natively</p>
            </SkillInfo>
            {:else if hoveredSkill == "rust"}
            <SkillInfo title="Rust">
                <p>Rust is a low level programming language that focuses on memory safety and protecting you from making mistakes</p>
            </SkillInfo>
            {:else if hoveredSkill == "apple"}
            <SkillInfo title="Apple">
                <p>Apple creates macOS and iOS which are the second highest market share OS's in the world</p>
            </SkillInfo>
            {:else}
            <SkillInfo title="Information">
                <p>Hover over a skill to see its name an a brief description of it!</p>
            </SkillInfo>
            {/if}

        </div>
    </Card>
</div>

<div class="flex justify-center items-center p-10">
    <div class="grid gap-4 grid-rows-4 grid-cols-2 lg:grid-cols-6">
        <IconLink href="https://typescriptlang.org" icon="typescript" hovered={hoveredSet} unhover={unhover}></IconLink>
        <IconLink href="https://tailwindcss.com" icon="tailwindcss" hovered={hoveredSet} unhover={unhover}></IconLink>
        <IconLink href="https://svelte.dev" icon="svelte" hovered={hoveredSet} unhover={unhover}></IconLink>
        <IconLink href="https://kotlinlang.org" icon="kotlin" hovered={hoveredSet} unhover={unhover}></IconLink>
        <IconLink href="https://rust-lang.org" icon="rust" hovered={hoveredSet} unhover={unhover}></IconLink>
        <IconLink href="https://apple.com" icon="apple" hovered={hoveredSet} unhover={unhover}></IconLink>
    </div>
</div>