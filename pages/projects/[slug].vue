<template>
  <div>
    <NuxtLink :to="'/'">Back</NuxtLink>
  </div>
  <div>
    <h1 class="title">Slug vue</h1>
    <div v-if="project">
      <div>
        <h3>Name: {{ project.data[0].text }}</h3>
      </div>
      <img class="project-image"  :src="project.data[0].image.url"/>
      <div>
        <h3>Description</h3>
        <p>{{ project.data[0].description }}</p>
      </div>
      <div>
        <h3>Link</h3>
        <NuxtLink :to="project.data[0].link">
        <img class="github-logo" src="https://ukfzcxzweuqqhcxprujs.supabase.co/storage/v1/object/public/strapi-uploads/github.svg-13166fab28d14f8b74d4adea6d834d12.svg?updated_at=2023-03-01T11:04:19.736Z" alt="">
        </NuxtLink>
      </div>
      <div>
        <h3>Type de projet :</h3>
        <p>{{ project.data[0].types }}</p>
      </div>
      <div>
        <h3>Technos :</h3>
        <div v-for="(project, index) in project.data[0].technos" :key="index">
          <img class="technos-logo" :src="project.logo.url" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const { findOne } = useStrapi()
const route = useRoute()


const project = ref();

onMounted(async () => {
  project.value = await findOne("projects", {filters: {slug: {$eq: route.params.slug}}, populate: 'deep'})
  console.log(project.value.data)
});



</script>