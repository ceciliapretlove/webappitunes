<template>
   <div>
      <!-- Preloader -->
      <div class="preloader d-flex align-items-center justify-content-center">
         <div class="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
         </div>
      </div>
      <header class="header-area">
         <div class="main-menu">
            <div class="classy-nav-container breakpoint-off">
               <div class="container">
                  <nav class="classy-navbar justify-content-between" id="nav">
                     <a href="index.html" class="nav-brand"><img src="img/core-img/logo.png" alt=""></a>
                     <div class="classy-navbar-toggler">
                        <span class="navbarToggler"><span></span><span></span><span></span></span>
                     </div>
                     <div class="classy-menu">
                        <div class="classycloseIcon">
                           <div class="cross-wrap"><span class="top"></span><span class="bottom"></span></div>
                        </div>
                        <div class="classynav">
                           <ul>
                              <li><a href="index.html">Home</a></li>
                              <li><a href="#open-modal">Favourites</a></li>
                           </ul>
                        </div>
                     </div>
                  </nav>
               </div>
            </div>
         </div>
      </header>
      <!-- Slider -->
      <section class="heroarea">
         <carousel></carousel>
      </section>
      <!--  Album Lists -->
      <section class="albums has-fluid bg-gray section-padding-100">
         <div class="container-fluid">
            <div class="row">
               <div class="col-12">
                  <div class="section-heading style-2">
                     <p>Buy New Album</p>
                     <h2>See what’s new</h2>
                  </div>
               </div>
            </div>
            <div class="row justify-content-center text-center">
               <div class="col-md-12">
                    <input class="search" type="text" v-model="searchQuery" placeholder="search">
               </div>
            </div>

            <div class="row">
               <!-- Single Album -->
               <div class="col-12 col-sm-6 col-md-4 col-lg-2" v-for="(entryList,index) in filtered.slice(0,loadmoreindex)" :key="index">
                  <div class="single-album-area wow fadeInUp" data-wow-delay="100ms" v-if="filteredEntryLists.length">
                     <div class="album-thumb">
                        <img :src="entryList.im_image[2].label" alt="">
                        <div class="album-price">
                           <p>{{entryList.im_price.label}}</p>
                        </div>
                     </div>
                     <div class="album-info">
                        <a :href="entryList.link.attributes.href" target="_blank">
                           <h5>{{entryList.im_artist.label}}</h5>
                        </a>
                        <p>{{entryList.title.label}}</p>
                     </div>
                     <div class="buy-fav text-right">
                         <a :href="entryList.link.attributes.href" target="_blank">
                          <icon name="shopping-cart"></icon>
                        </a>
                         <a 
                            :data-index="index"
                            :class="{'active text-danger': checkInFavorites(entryList), '': !checkInFavorites(entryList)}"
                            @click="processFavorites(entryList)">
                          <icon name="heart"></icon>
                       </a>
                     </div>
                  </div>
               </div>
            </div>
            <div class="row">
               <div class="col-12">
                  <div class="load-more-btn text-center wow fadeInUp" data-wow-delay="300ms">
                    <button @click="loadmore" class="loadmore-btn">
                         Load More 
                         <i class="fa fa-angle-double-right"></i>
                    </button>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <!--  Newest  -->
      <section class="featured-artist-area section-padding-100 bg-img bg-overlay bg-fixed" style="background-image: url(img/bg-img/banner2.jpg);">
         <div class="container" v-for="(entryList,index) in entryLists.slice(0,1)" :key="index">
            <div class="row align-items-end">
               <div class="col-12 col-md-2 col-lg-2">
                  <div class="featured-artist-thumb">
                     <img :src="entryList.im_image[2].label" alt="">
                  </div>
               </div>
               <div class="col-12 col-md-10 col-lg-10">
                  <div class="featured-artist-content">
                     <div class="section-heading white text-left mb-30">
                        <p>See what’s new</p>
                        <h2>Buy What’s New</h2>
                     </div>
                     <p>Nam tristique ex vel magna tincidunt, ut porta nisl finibus. Vivamus eu dolor eu quam varius rutrum. Fusce nec justo id sem aliquam fringilla nec non lacus. Suspendisse eget lobortis nisi, ac cursus odio. Vivamus nibh velit, rutrum at ipsum ac, dignissim iaculis ante. Donec in velit non elit pulvinar pellentesque et non eros.</p>
                     <div class="song-play-area">
                        <div class="song-name">
                           <p>{{entryList.title.label}}</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <!--  Album Chart  -->
      <section class="chart-area section-padding-100-0">
         <div class="container">
            <div class="row">
               <!-- Weeks Top-->
               <div class="col-12 col-lg-4">
                  <div class="weeks-top-area mb-100">
                     <div class="section-heading text-left mb-50 wow fadeInUp" data-wow-delay="50ms">
                        <h2>This week’s top</h2>
                     </div>
                     <!-- Single Item -->
                     <div class="single-top-item d-flex wow fadeInUp" data-wow-delay="100ms" v-for="(entryList,index) in entryLists.slice(0,6)" :key="index">
                        <div class="thumbnail">
                           <img :src="entryList.im_image[2].label" alt="">
                        </div>
                        <div class="content-">
                           <h6>{{entryList.title.label}}</h6>
                           <p>{{entryList.im_artist.label}}</p>
                        </div>
                     </div>
                  </div>
               </div>
               <!-- New Hits Songs -->
               <div class="col-12 col-lg-4">
                  <div class="new-hits-area mb-100">
                     <div class="section-heading text-left mb-50 wow fadeInUp" data-wow-delay="50ms">
                        <h2>New Hits</h2>
                     </div>
                     <!-- Single Top Item -->
                     <div class="single-new-item d-flex align-items-center justify-content-between wow fadeInUp" data-wow-delay="100ms" v-for="(entryList,index) in entryLists.slice(0,6)" :key="index">
                        <a :href="entryList.link.attributes.href" target="_blank">
                           <div class="first-part d-flex align-items-center">
                              <div class="thumbnail">
                                 <img :src="entryList.im_image[2].label" alt="">
                              </div>
                              <div class="content-">
                                 <h6>{{entryList.title.label}}</h6>
                                 <p>{{entryList.im_artist.label}}</p>
                              </div>
                           </div>
                        </a>
                     </div>
                  </div>
               </div>
               <!-- Popular -->
               <div class="col-12 col-lg-4">
                  <div class="popular-artists-area mb-100">
                     <div class="section-heading text-left mb-50 wow fadeInUp" data-wow-delay="50ms">
                        <h2>Popular Artist</h2>
                     </div>
                     <!-- Single Artist -->
                     <div class="single-artists d-flex align-items-center wow fadeInUp" data-wow-delay="100ms" v-for="(entryList,index) in entryLists.slice(0,6)" :key="index">
                        <div class="thumbnail">
                           <img :src="entryList.im_image[2].label" alt="">
                        </div>
                        <div class="content-">
                           <h6>{{entryList.title.label}}</h6>
                           <p>{{entryList.im_artist.label}}</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   </div>
   <div id="open-modal" class="modal-window">
    <a href="#" title="Close" class="modal-close">Close</a>
    <h1>Your Favourites</h1>
      <div class="single-artists d-flex align-items-center wow fadeInUp" data-wow-delay="100ms" v-for="(entryList,index) in listFavorites.slice(0,6)" :key="index">
         <div class="thumbnail">
            <img :src="listFavorites.im_image[2].label" alt="">
         </div>
         <div class="content-">
            <h6>{{listFavorites.title.label}}</h6>
            <p>{{listFavorites.im_artist.label}}</p>
         </div>
      </div>
    </div>
</div>
</template>
<script>
	export default{

        data(){
            return{
                listFavorites: [],
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

        mounted() {
          if (localStorage.getItem('favorites')) this.listFavorites = JSON.parse(localStorage.getItem('favorites'));
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
            },
            processFavorites(entryList) {
              if( !this.checkInFavorites(entryList) ) {
                this.addFavorites(entryList);
              } else {
                this.removeFavorites(entryList);
              }

              //Add local storage
              localStorage.setItem('favorites', JSON.stringify(this.listFavorites));
            },
            addFavorites(entryList) {
              this.listFavorites.push(entryList);
            },
            removeFavorites(entryList) {
              let index = this.getIndexFavorites(entryList);
              console.log(index);
              this.listFavorites.splice(index, 1);
            },
            checkInFavorites(entryList) {
              let found = false;
              this.listFavorites.forEach(function (item, i) {
                if(entryList.id.attributes.im_id.trim() === item.id.attributes.im_id.trim()) {
                  found = true;
                }
              });
              return found;
            },
            getIndexFavorites(entryList) {
              let index = -1;
              this.listFavorites.forEach(function (item, i) {
                if(entryList.id.attributes.im_id.trim() === item.id.attributes.im_id.trim()) {
                  index = i;
                }
              });
              return index;
            },
            loadmore: function() {       
              this.loadmoreindex = (this.loadmoreindex) + 6
            }
        },


        computed: {
          filtered(){
              if(this.searchQuery){
                return this.filteredEntryLists.filter((index)=>{
                return index.title.label.toLowerCase(this.searchQuery).includes(this.searchQuery.toLowerCase())
                
              })

              }else{
                return this.filteredEntryLists;
              }

            }
      }
    }


</script>