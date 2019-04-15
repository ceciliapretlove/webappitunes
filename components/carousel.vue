<template>
	<div>
		<div class="single-hero-slide d-flex align-items-center justify-content-center">
            <div class="single-hero-slide d-flex align-items-center justify-content-center">
                <!-- Slide Img -->
                <div class="slide-img bg-img" style="background-image: url(img/bg-img/banner1.jpg);"></div>
                <!-- Slide Content -->
                <div class="container" v-for="(entryList,index) in entryLists.slice(0,1)" :key="index">
                    <div class="row">
                        <div class="col-12">
                            <div class="hero-slides-content text-center">
                                <h6 data-animation="fadeInUp" data-delay="100ms">Latest album</h6>
                                <h2 data-animation="fadeInUp" data-delay="300ms">{{entryList.title.label}} <span>{{entryList.title.label}}</span></h2>
                                <a data-animation="fadeInUp" data-delay="500ms" :href="entryList.link.attributes.href" class="discover-btn mt-50" target="_blank">Discover <i class="fa fa-angle-double-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

		</div>

	</div>
</template>
<script>
    export default{

        data(){
            return{
                searchQuery: '',
                filteredEntryLists: [],
                entryLists: '',
                loadmoreindex: 12
            }
        },

        created(){
            Axios.get('https://itunes.apple.com/us/rss/topalbums/limit=100/json')
            .then(res=>{
                this.entry(res.data.feed.entry)
            })
            .catch(err=>{
                console.log(err)
            })

        },


        methods:{
            entry(value){
                let temp = []
                let temp1 = {}
                const temp2 = JSON.stringify(value)
                let temp3 = ''
                temp3 = temp2.replace(/im:/g,"im_")

                const temp4 = JSON.parse(temp3)
                this.entryLists = temp4
                this.filteredEntryLists = this.entryLists
                console.log(this.entryLists)
            }
      }
    }


</script>