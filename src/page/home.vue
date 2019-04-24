<template>
	<div id="container">
		<div id="output">
			<div class="tip_container">
				<span class="tips">点击封面开关打开或关闭书本！ 点击人物向前或向后翻页！</span>
			</div>
			<div class="back">
				<i class="switch_open last" @click="handleClick('last','first','')"></i>
				<span ref="click_tips" class="click_tips">不要点的太快，小手手都翻不过来了...</span>
			</div>
			
			<div class="home first">
				<div class="logo">{{frontCover.logo}}</div>
				<div class="home_title">{{frontCover.title}}</div>
				<div class="home_content">{{frontCover.content}}</div>
				<div class="year">{{frontCover.year}}</div>
				<i class="switch_close" @click="handleClick('first','ref_1','')"></i>
			</div>

			<div class="content" v-for="(item,index) in content" :key="item.cur" :class="item.cur">
				<img class="photo" src="../assets/img/photo.png" alt="头像" @click="handleClick(item.cur,item.next,index+1)" />
				<div class="content_title" v-if="item.isTitle">
					<h3>{{item.chapter}}</h3>
					<p>{{item.title}}</p>
				</div>
				<div class="content_text" v-else>
					<p>{{item.content}}</p>
				</div>
			</div>
			<router-view/>
		</div>
	</div>
</template>

<script>
	import Vector from "@/assets/js/vector"
	import { prefixStyle } from "@/assets/js/dom"
	import  "@/../static/js/config.js"
	const transform = prefixStyle('transform')
	export default {
		data() {
			return {
				canClick: false,
				frontCover: {},
				content: []
			}
		},
		mounted() {
			Vector("container", "output")
			this.content = bookContent.content
			this.frontCover = bookContent.frontCover
		},
		methods: {
			handleClick(item, next, index) {
				if(this.canClick) {
					document.getElementsByClassName('click_tips')[0].style.display = "block"
					setTimeout(() => {
						document.getElementsByClassName('click_tips')[0].style.display = "none"
					}, 5000)
					return
				}
				setTimeout(() => {
					this.canClick = false
				}, 2500)
				if(item != 'first') {
					this.canClick = true
				}
				document.getElementsByClassName('home')[0].classList.add('home_open')
				document.getElementsByClassName(item)[0].classList.add('content_open')
				let curCls = document.getElementsByClassName(item)[0]
				let nextCls = document.getElementsByClassName(next)[0]
				if(item == 'first') {
					document.getElementsByClassName('switch_close')[0].style.display = 'none'
					document.getElementsByClassName('switch_open')[0].style.display = 'block'

				} else if(item == 'last') {
					nextCls.style[transform] = 'rotateY(0)'
					this.content.forEach((val, index) => {
						document.getElementsByClassName(val.cur)[0].style[transform] = 'rotateY(0)'
						document.getElementsByClassName('content')[index].classList.add('z_index_0')
						val.isFront = true
					})
					setTimeout(() => {
						document.getElementsByClassName('switch_close')[0].style.display = 'block'
						document.getElementsByClassName('switch_open')[0].style.display = 'none'
						this.content.forEach((val, index) => {
							document.getElementsByClassName('content')[index].classList.remove('z_index_1')
							document.getElementsByClassName('content')[index].classList.remove('z_index_0')
							document.getElementsByClassName('content')[index].style.display = 'none'
						})
					}, 2500)
				}
				nextCls.style.display = 'block'
				if(item != 'last') {
					curCls.classList.add('z_index_1')
					curCls.style[transform] = 'rotateY(160deg)'
				}
				if(index != '' && index != undefined) {

					this.content[index - 1].isFront = !this.content[index - 1].isFront
					if(this.content[index - 1].isFront) {
						//反向翻转
						curCls.style[transform] = 'rotateY(0)'
						nextCls.style.zIndex = '0'
						setTimeout(() => {
							nextCls.style.display = 'none'
						}, 2500)
					}
				}
			}
		}
	}
</script>

<style scoped>
	@import "../assets/css/index.css";
	#container {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 99;
	}
	
	#container #output {
		width: 100%;
		height: 100%;
	}
	
	.home {
		display: block;
	}
</style>