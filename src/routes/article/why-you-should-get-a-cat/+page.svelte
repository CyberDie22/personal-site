<script>
	import Card from "$lib/components/Card.svelte";
	import Link from "$lib/components/Link.svelte";
</script>

<div class="flex justify-center items-center pt-6 pb-6">
    <Card clazz="max-w-2xl">
        <center><h1 class="font-bold text-2xl">Why You Should Get a Cat</h1></center>

        <p>
            Cats can help you in many ways! They can make you feel less lonely at home if you aren't living with someone else,
            if you get two they can play with each other, and having a cat has many health benefits as well!
        </p>

        <br>

        <img src="/pexels-rhea-hazel-13722001.jpg" alt="White cat sleeping in the light" />
        <p class="text-sm">Credit: Rhea Hazel on Pexels</p>

        <br>

        <p>
            When a cat purrs, it vibrates at a frequency between 25 and 125 hertz. Studies have shown that this promotes bone
            density and healing.<Link href="https://northcare.com.au/blog/cat_purr_strengthens_our_bones/">¹</Link> A cats purr can also lower blood pressure, lower stress, and heal infections!
        </p>

        <br>

        <p>
            If you would like to get a cat, you can adopt a cat at a local animal shelter, or at a pet store (but you should try an animal shelter first!)
        </p>

        <br>

        <p>
            <Link href="https://animalshelter.org/">animalshelter.org</Link> is a good way to find an animal up for adoption near you!
        </p>
    </Card>
</div>