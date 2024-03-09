<template>
  <div class="mainPart" :style="darkMode ? darkModeStyles : lightModeStyles">
    <div class="mainBoard" :style="darkMode ? darkMainBoard :lightMainBoard" >
      <div>
        <p class="title">Daily News</p>
      </div>
      <div>
        <p class="mainContent">Every year more and more climbers, travelers and adventurers gather to
          climb Everest at the foot of the great mountain. Climbing Everest is
          becoming more fashionable and expensive from year to year.
        </p>
      </div>
      <div>
        <img class="topImage" src="~/assets/images/Everest.png" alt="everest">
        <div class="middlePart">
          <div class="thumbs">
            <svg :style="darkMode ? darkThumbs :lightThumbs" @click="increase" :class="{ 'thumbsup': true,  }" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="currentColor" d="M323.8 34.8c-38.2-10.9-78.1 11.2-89 49.4l-5.7 20c-3.7 13-10.4 25-19.5 35l-51.3 56.4c-8.9 9.8-8.2 25 1.6 33.9s25 8.2 33.9-1.6l51.3-56.4c14.1-15.5 24.4-34 30.1-54.1l5.7-20c3.6-12.7 16.9-20.1 29.7-16.5s20.1 16.9 16.5 29.7l-5.7 20c-5.7 19.9-14.7 38.7-26.6 55.5c-5.2 7.3-5.8 16.9-1.7 24.9s12.3 13 21.3 13H448c8.8 0 16 7.2 16 16c0 6.8-4.3 12.7-10.4 15c-7.4 2.8-13 9-14.9 16.7s.1 15.8 5.3 21.7c2.5 2.8 4 6.5 4 10.6c0 7.8-5.6 14.3-13 15.7c-8.2 1.6-15.1 7.3-18 15.2s-1.6 16.7 3.6 23.3c2.1 2.7 3.4 6.1 3.4 9.9c0 6.7-4.2 12.6-10.2 14.9c-11.5 4.5-17.7 16.9-14.4 28.8c.4 1.3.6 2.8.6 4.3c0 8.8-7.2 16-16 16h-97.5c-12.6 0-25-3.7-35.5-10.7l-61.7-41.1c-11-7.4-25.9-4.4-33.3 6.7s-4.4 25.9 6.7 33.3l61.7 41.1c18.4 12.3 40 18.8 62.1 18.8H384c34.7 0 62.9-27.6 64-62c14.6-11.7 24-29.7 24-50c0-4.5-.5-8.8-1.3-13c15.4-11.7 25.3-30.2 25.3-51c0-6.5-1-12.8-2.8-18.7c11.6-11.8 18.8-27.8 18.8-45.5c0-35.3-28.6-64-64-64h-92.3c4.7-10.4 8.7-21.2 11.8-32.2l5.7-20c10.9-38.2-11.2-78.1-49.4-89M32 192c-17.7 0-32 14.3-32 32v224c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32z"></path></svg>
            <svg :style="darkMode ? darkThumbs :lightThumbs" @click="decrease" :class="{ 'thumbsup': true,  }" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="currentColor" d="M323.8 477.2c-38.2 10.9-78.1-11.2-89-49.4l-5.7-20c-3.7-13-10.4-25-19.5-35l-51.3-56.4c-8.9-9.8-8.2-25 1.6-33.9s25-8.2 33.9 1.6l51.3 56.4c14.1 15.5 24.4 34 30.1 54.1l5.7 20c3.6 12.7 16.9 20.1 29.7 16.5s20.1-16.9 16.5-29.7l-5.7-20c-5.7-19.9-14.7-38.7-26.6-55.5c-5.2-7.3-5.8-16.9-1.7-24.9s12.3-13 21.3-13H448c8.8 0 16-7.2 16-16c0-6.8-4.3-12.7-10.4-15c-7.4-2.8-13-9-14.9-16.7s.1-15.8 5.3-21.7c2.5-2.8 4-6.5 4-10.6c0-7.8-5.6-14.3-13-15.7c-8.2-1.6-15.1-7.3-18-15.2s-1.6-16.7 3.6-23.3c2.1-2.7 3.4-6.1 3.4-9.9c0-6.7-4.2-12.6-10.2-14.9c-11.5-4.5-17.7-16.9-14.4-28.8c.4-1.3.6-2.8.6-4.3c0-8.8-7.2-16-16-16h-97.5c-12.6 0-25 3.7-35.5 10.7l-61.7 41.1c-11 7.4-25.9 4.4-33.3-6.7s-4.4-25.9 6.7-33.3l61.7-41.1c18.4-12.3 40-18.8 62.1-18.8H384c34.7 0 62.9 27.6 64 62c14.6 11.7 24 29.7 24 50c0 4.5-.5 8.8-1.3 13c15.4 11.7 25.3 30.2 25.3 51c0 6.5-1 12.8-2.8 18.7c11.6 11.8 18.8 27.8 18.8 45.5c0 35.3-28.6 64-64 64h-92.3c4.7 10.4 8.7 21.2 11.8 32.2l5.7 20c10.9 38.2-11.2 78.1-49.4 89M32 384c-17.7 0-32-14.3-32-32V128c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v224c0 17.7-14.3 32-32 32z"></path></svg>
          </div>
          <div>
            <p>{{ number }} views</p>
          </div>
        </div>
        <div>
          <div>
            <p>{{commentNumber  }} comments</p>
          </div>
          <form class="comment">
            <input type="text" class="mainInput" v-model="content" placeholder="Enter a comment">
            <svg  @click="addComment" class="send" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 512 512"><path fill="currentColor" d="M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376v103.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3l123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4zm52.1 25.5L409.7 90.6L190.1 336l1.2 1zm335.1 139.7l-166.6-69.5l214.1-239.3z"></path></svg>
          </form>
        </div>
        <div>
          <Comments key="comment"
          v-for="comment in inpText"
          v-bind:commentContent="comment.commentContent"/>
          
          <div>
            <input type="checkbox" id="switch" v-model="darkMode" @change="toggleDarkMode" /><label for="switch">Toggle</label>
          </div>
            
          
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import { Comments } from '~~/.nuxt/components';

export default defineComponent({
  components: {
    Comments
  },
  data() {
    return {
      number: 200,
      initialNumber: 200,
      leftDisabled: false,
      rightDisabled: false,
      content:null,
      inpText: [{
        commentContent:"Wow, it's amazing to see how climbing Everest has become a trend! It's both fascinating and concerning to think about the increasing number of people attempting such a challenging feat. With popularity comes greater environmental impact and safety concerns. Hopefully, as more people flock to Everest, they'll also emphasize responsible and sustainable climbing practices. "
      }
      ],
      commentNumber:1,
      darkMode: false,
      darkModeStyles: {
        backgroundColor: '#000',
        color: '#fff'
      },
      lightModeStyles: {
        backgroundColor: '#E8EAF0',
        color: '#000'
      },
      darkMainBoard:{
        backgroundColor: '#222222',
      },
      lightMainBoard:{
        backgroundColor:'#ffffff'
      },
      darkThumbs:{
        backgroundColor: '#333333',
      },
      lightThumbs:{
        backgroundColor: '#F0F2F5',
      },
    }
  },
  methods: {
    increase() {

      if (this.number < this.initialNumber||this.number === this.initialNumber) {
        this.number++;
        this.leftDisabled = true;
        this.rightDisabled = false;

      }
    },
    decrease() {
      if (this.number > this.initialNumber ||this.number === this.initialNumber) {
        this.number--;
        this.rightDisabled = true;
        this.leftDisabled = false;
      }
    },
    addComment(){
        let item = {
          commentContent  : this.content
        }
        this.inpText.push(item)
        this.content = null
        this.commentNumber++
      },
      toggleBackgroundColor() {
      // Toggle background color between black and another color
     
    }
  },

})
</script>

<style scoped>
.title {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  padding-top: 30px;
}

.mainBoard {
  max-width: 768px;
  margin-inline: auto;
  padding: 20px;
  border-radius: 20px;
}

.mainPart {
  
  padding-top: 50px;
  padding-bottom:50px;
  color:#fff
}

.mainContent {
  font-size: 20px;
  padding-bottom: 20px;
}

.topImage {
  width: 2440px;
  height: 400px;
  border-radius: 15px;
}

.thumbs {
  display: flex;
}

.thumbsup {
  background-color: #333333;
  width: 100px;
  height: 30px;
  border-radius: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-top: 15px;
  margin-right: 15px;
  cursor: pointer; /* Add cursor pointer */
}

.disabled {
  opacity: 0.5; /* or any other styling to indicate the button is disabled */
  pointer-events: none; /* disable pointer events to prevent clicking */
}

.middlePart {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  margin-top: 15px;
  margin-bottom: 15px;
  padding-bottom: 30px;
  border-bottom: solid 3px #2C2D2D;
}

.mainInput {
  border: solid 2px #f0f2f5;
  width: 650px;
  height: 40px;
  border-radius: 20px;
  padding: 10px;
  color:black;
}

.mainInput:focus {
  outline: none;
  border: 1px solid lightblue;
}

.comment {
  display: flex;
  gap: 20px;
  padding-top: 15px;
}

.send {
  color: #404040;
}

.colorButton button{
  padding: 5px 15px 5px 15px;
  background-color: #f0f2f5;
  color:#222222;
  border-radius: 15px;
  font-size:15px;
  
}
.colorButton{
  display:flex;
  justify-content: center;
  padddint-top:20px;
}

input[type=checkbox]{
	height: 0;
	width: 0;
	visibility: hidden;
}

label {
	cursor: pointer;
	text-indent: -9999px;
	width: 50px;
	height: 25px;
	background: grey;
	display: block;
	border-radius: 100px;
	position: relative;
}

label:after {
	content: '';
	position: absolute;
	
	left: 0px;
	width: 25px;
	height: 25px;
	background: #fff;
	border-radius: 90px;
	transition: 0.3s;
}

input:checked + label {
	background: #bada55;
}

input:checked + label:after {
	left: calc(100% );
	transform: translateX(-100%);
}

label:active:after {
	width: 40px;
}

</style>