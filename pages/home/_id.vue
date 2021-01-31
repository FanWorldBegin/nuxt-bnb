<template>
<div>
    <div style="display:flex;">
        <img v-for="image in home.images" :key="image" :src="image" width="200" height="150"/>
    </div>
    {{ home.title }}<br/>
    ${{ home.pricePerNight }} / night<br/>
    <img src="/images/marker.svg" width="20" height="20"/>{{ home.location.address }} {{ home.location.city }} {{ home.location.state }} {{ home.location.country }}<br/>
    <img src="/images/star.svg" width="20" height="20"/>{{ home.reviewValue}} <br/>
    {{ home.guests }} guests, {{ home.bedrooms }} rooms, {{ home.beds }} beds, {{ home.bathrooms }} bath<br/>
    {{ home.description }}
    <div style="height:800px;width:800px" ref="map"></div>
    <div v-for="review in reviews" :key="review.objectID">
        <div><img :src="review.reviewer.image" alt=""></div>
        <div>{{ review.reviewer.name }}</div>
        <div>{{ review.date }}</div>
        <div>{{ review.comment }}</div>
    </div>
    </div>
</template>
<script>
export default {
    head(){
        return {
            title: this.home.title,
        }
    },
    mounted(){
        this.$maps.showMap()
    },

    async asyncData({ params, $dataApi, error }){
        console.log('asyncData')
        const responses = await Promise.all([
          $dataApi.getHome(params.id),
          dataApi.getReviewsByHomeId(params.id),
          $dataApi.getReviewsByHomeId(params.id),
        ])

        const badResponse = responses.find((response) => !respomse.ok);
        if(badResponse)  return error({ statusCode: badResponse.status, message: badResponse.statusText});
        return {
            home: responses[0].json,
            reviews: responses[1].json.hits,
            user: userResponse[2].json.htis[0]
        }
    }
}
</script>
