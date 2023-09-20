import { createRef } from 'react'
import sora1 from '../Img/s1.jpg'
import sora2 from '../Img/s2.jpg'
import sora3 from '../Img/s3.jpg'
import sora4 from '../Img/s4.jpg'
import sora5 from '../Img/soraversace.jpg'
import soraBio from '../Img/biosora.jpg'
import dazed1 from '../Img/Portfolio/dazed1.jpg'
import vacanza from '../Img/vacanza.jpg'
import sorac from '../Img/sorac.jpg'
import fordmodels from '../Img/fordmodelspng.png'
import lions from '../Img/lions.png'
import gost from '../Img/gost.jpg'
import whilhelmina from '../Img/whilhelmina.jpg'
import youngbloods from '../Img/ybloods.png'
// Portfolio Images
import vogue1 from '../Img/Portfolio/vogue1.jpg'
import vogue2 from '../Img/Portfolio/vogue2.jpg'
import vogue3 from '../Img/Portfolio/vogue3.jpg'
import vogue4 from '../Img/Portfolio/vogue4.jpg'
import vogue5 from '../Img/Portfolio/vogue5.jpg'
import vogue6 from '../Img/Portfolio/vogue6.jpg'
import vogue7 from '../Img/Portfolio/vogue7.jpg'


import dazd1 from '../Img/Portfolio/d1.jpg'
import dazed2 from '../Img/Portfolio/dazed2.jpg'
import dazed3 from '../Img/Portfolio/dazed3.jpg'
import dazed4 from '../Img/Portfolio/dazed4.jpg'
import dazed5 from '../Img/Portfolio/dazed5.jpg'

import elle1 from '../Img/Portfolio/elle1.jpg'
import elle2 from '../Img/Portfolio/elle2.jpg'
import elle3 from '../Img/Portfolio/elle3.jpg'
import elle4 from '../Img/Portfolio/elle4.jpg'

import wow1 from '../Img/Portfolio/wow1.jpg'
import wow2 from '../Img/Portfolio/wow2.jpg'
import wow3 from '../Img/Portfolio/wow3.jpg'
import wow4 from '../Img/Portfolio/wow4.jpg'
import wow5 from '../Img/Portfolio/wow5.jpg'
import wow6 from '../Img/Portfolio/wow6.jpg'
import wow7 from '../Img/Portfolio/wow7.jpg'
import wow8 from '../Img/Portfolio/wow8.jpg'

import perfect1 from '../Img/Portfolio/perfect1.jpg'
import perfect2 from '../Img/Portfolio/perfect2.jpg'
import perfect3 from '../Img/Portfolio/perfect3.jpg'

import bazaar1 from '../Img/Portfolio/bazaar1.jpg'
import bazaar2 from '../Img/Portfolio/bazaar2.jpg'
import bazaar3 from '../Img/Portfolio/bazaar3.jpg'
import bazaar4 from '../Img/Portfolio/bazaar4.jpg'

import vacanza1 from '../Img/Portfolio/v1.jpg'

export const IMGCarrousel = [
    {url:sora1,},
    {url:sora2},
    {url:sora3,title:'soraaaaaaaa'},
    {url:sora4},
    {url:sora5},
    {url:soraBio},
    {url:dazed1},
    {url:vacanza}
]
export const AGENCIES =[
    {url:fordmodels,link:'https://fordmodels.com/paris/profile/sora-choi'},
    {url:lions,link:'https://www.thelionsmanagement.com/'},
    {url:gost,link:'http://www.gostagency.com/'},
    {url:whilhelmina,link:'https://www.wilhelmina.com/'},
    {url:youngbloods,link:'https://www.theyoungbloods.com/'},
    {sora:sorac,link:''}
]

export const PORTFOLIO =[
    {url:dazd1,title:'Dazed Korea May 2023', info1:'Photography: Park Sangjun',info2:'Hair: Lee Hyejin',info3:'Styling: Oh Yura'},
    {url:wow1,title:'The WOW - ISSUE 5',info1:'Photography: KOVE LEE',info2:'Stylist: WOO LEE',info3:'Hair: WOOJUN KIM'},
    {url:bazaar1,title:"Harper's BAZAAR",info1:'Photograpy:AMY TROOST ',info2:'Stylist:VIRGINIE BENARROCH',info3:'Published: May 2022'},
    {url:vogue1,title:'Vogue Korea',info1:'Photografy:HYEA W. KANG',info2:'Stylist:EUNYOUNG SOHN',info3:''},
    {url:elle1,title:'A Different Side of Sora Choi',info1:'Photografy:SHARIF HAMZA',info2:'Stylist:ALEX WHITE',info3:'Published:MAR 15, 2023'},
    {url:perfect1,title:'Perfect',info1:'Photografy:WILLY VANDERPERRE ',info2:'',info3:''},
    {url: vacanza1,title:"Versace x Dua Lipa 'La Vacanza' ",info1:'Designer: Donatella Versace & Dua Lipa',info2:'Stylist: Jacob K',info3:''}
]

export const GALLERY =[
    {dazed:[ {url:dazd1,title:'Dazed Korea May 2023', info1:'Photography: Park Sangjun',info2:'Hair: Lee Hyejin',info3:'Styling: Oh Yura'},
    {url:dazed2,title:'Dazed Korea May 2023', info1:'Photography: Park Sangjun',info2:'Hair: Lee Hyejin',info3:'Styling: Oh Yura'},
    {url:dazed3,title:'Dazed Korea May 2023', info1:'Photography: Park Sangjun',info2:'Hair: Lee Hyejin',info3:'Styling: Oh Yura'},
    {url:dazed4,title:'Dazed Korea May 2023', info1:'Photography: Park Sangjun',info2:'Hair: Lee Hyejin',info3:'Styling: Oh Yura'},
    {url:dazed5,title:'Dazed Korea May 2023', info1:'Photography: Park Sangjun',info2:'Hair: Lee Hyejin',info3:'Styling: Oh Yura'},
]},
    {wow:[{url:wow1,title:'The WOW - ISSUE 5',info1:'Photography: KOVE LEE',info2:'Stylist: WOO LEE',info3:'Hair: WOOJUN KIM'},
    {url:wow2,title:'The WOW - ISSUE 5',info1:'Photography: KOVE LEE',info2:'Stylist: WOO LEE',info3:'Hair: WOOJUN KIM'},
    {url:wow3,title:'The WOW - ISSUE 5',info1:'Photography: KOVE LEE',info2:'Stylist: WOO LEE',info3:'Hair: WOOJUN KIM'},
    {url:wow4,title:'The WOW - ISSUE 5',info1:'Photography: KOVE LEE',info2:'Stylist: WOO LEE',info3:'Hair: WOOJUN KIM'},
    {url:wow5,title:'The WOW - ISSUE 5',info1:'Photography: KOVE LEE',info2:'Stylist: WOO LEE',info3:'Hair: WOOJUN KIM'},
    {url:wow6,title:'The WOW - ISSUE 5',info1:'Photography: KOVE LEE',info2:'Stylist: WOO LEE',info3:'Hair: WOOJUN KIM'},
    {url:wow7,title:'The WOW - ISSUE 5',info1:'Photography: KOVE LEE',info2:'Stylist: WOO LEE',info3:'Hair: WOOJUN KIM'},
    {url:wow8,title:'The WOW - ISSUE 5',info1:'Photography: KOVE LEE',info2:'Stylist: WOO LEE',info3:'Hair: WOOJUN KIM'},
]},
    {elle:[  {url:elle1,title:'A Different Side of Sora Choi',info1:'Photografy:SHARIF HAMZA',info2:'Stylist:ALEX WHITE',info3:'Published:MAR 15, 2023'},
    {url:elle2,title:'A Different Side of Sora Choi',info1:'Photografy:SHARIF HAMZA',info2:'Stylist:ALEX WHITE',info3:'Published:MAR 15, 2023'},
    {url:elle3,title:'A Different Side of Sora Choi',info1:'Photografy:SHARIF HAMZA',info2:'Stylist:ALEX WHITE',info3:'Published:MAR 15, 2023'},
    {url:elle4,title:'A Different Side of Sora Choi',info1:'Photografy:SHARIF HAMZA',info2:'Stylist:ALEX WHITE',info3:'Published:MAR 15, 2023'},
]},
    {vogue:[ {url:vogue1,title:'Vogue Korea',info1:'Photografy:HYEA W. KANG',info2:'Stylist:EUNYOUNG SOHN',info3:''},
    {url:vogue2,title:'Vogue Korea',info1:'Photografy:HYEA W. KANG',info2:'Stylist:EUNYOUNG SOHN',info3:''},
    {url:vogue3,title:'Vogue Korea',info1:'Photografy:HYEA W. KANG',info2:'Stylist:EUNYOUNG SOHN',info3:''},
    {url:vogue4,title:'Vogue Korea',info1:'Photografy:HYEA W. KANG',info2:'Stylist:EUNYOUNG SOHN',info3:''},
    {url:vogue5,title:'Vogue Korea',info1:'Photografy:HYEA W. KANG',info2:'Stylist:EUNYOUNG SOHN',info3:''},
    {url:vogue6,title:'Vogue Korea',info1:'Photografy:HYEA W. KANG',info2:'Stylist:EUNYOUNG SOHN',info3:''},
    {url:vogue7,title:'Vogue Korea',info1:'Photografy:HYEA W. KANG',info2:'Stylist:EUNYOUNG SOHN',info3:''},
]},
    {bazaar:[  {url:bazaar1,title:"Harper's BAZAAR",info1:'Photograpy:AMY TROOST ',info2:'Stylist:VIRGINIE BENARROCH',info3:'Published: May 2022'},
    {url:bazaar2,title:"Harper's BAZAAR",info1:'Photograpy:AMY TROOST ',info2:'Stylist:VIRGINIE BENARROCH',info3:'Published: May 2022'},
    {url:bazaar3,title:"Harper's BAZAAR",info1:'Photograpy:AMY TROOST ',info2:'Stylist:VIRGINIE BENARROCH',info3:'Published: May 2022'},
    {url:bazaar4,title:"Harper's BAZAAR",info1:'Photograpy:AMY TROOST ',info2:'Stylist:VIRGINIE BENARROCH',info3:'Published: May 2022'},
]},
    {perfect:[  {url:perfect1,title:'Perfect',info1:'Photografy:WILLY VANDERPERRE ',info2:'',info3:''},
    {url:perfect2,title:'Perfect',info1:'Photografy:WILLY VANDERPERRE ',info2:'',info3:''},
    {url:perfect3,title:'Perfect',info1:'Photografy:WILLY VANDERPERRE ',info2:'',info3:''},
]},
    {vacanza:[    {url: vacanza1,title:"Versace x Dua Lipa 'La Vacanza' ",info1:'Designer: Donatella Versace & Dua Lipa',info2:'Stylist: Jacob K',info3:''}
]}
]
















// export const DAZED = [
//     {url:dazed1,title:'Dazed Korea May 2023', info1:'Photography: Park Sangjun',info2:'Hair: Lee Hyejin',info3:'Styling: Oh Yura'},
//     {url:dazed2,title:'Dazed Korea May 2023', info1:'Photography: Park Sangjun',info2:'Hair: Lee Hyejin',info3:'Styling: Oh Yura'},
//     {url:dazed3,title:'Dazed Korea May 2023', info1:'Photography: Park Sangjun',info2:'Hair: Lee Hyejin',info3:'Styling: Oh Yura'},
//     {url:dazed4,title:'Dazed Korea May 2023', info1:'Photography: Park Sangjun',info2:'Hair: Lee Hyejin',info3:'Styling: Oh Yura'},
//     {url:dazed5,title:'Dazed Korea May 2023', info1:'Photography: Park Sangjun',info2:'Hair: Lee Hyejin',info3:'Styling: Oh Yura'},

// ]

// export const WOW =[
//     {url:wow1,title:'The WOW - ISSUE 5',info1:'Photography: KOVE LEE',info2:'Stylist: WOO LEE',info3:'Hair: WOOJUN KIM'},
//     {url:wow2,title:'The WOW - ISSUE 5',info1:'Photography: KOVE LEE',info2:'Stylist: WOO LEE',info3:'Hair: WOOJUN KIM'},
//     {url:wow3,title:'The WOW - ISSUE 5',info1:'Photography: KOVE LEE',info2:'Stylist: WOO LEE',info3:'Hair: WOOJUN KIM'},
//     {url:wow4,title:'The WOW - ISSUE 5',info1:'Photography: KOVE LEE',info2:'Stylist: WOO LEE',info3:'Hair: WOOJUN KIM'},
//     {url:wow5,title:'The WOW - ISSUE 5',info1:'Photography: KOVE LEE',info2:'Stylist: WOO LEE',info3:'Hair: WOOJUN KIM'},
//     {url:wow6,title:'The WOW - ISSUE 5',info1:'Photography: KOVE LEE',info2:'Stylist: WOO LEE',info3:'Hair: WOOJUN KIM'},
//     {url:wow7,title:'The WOW - ISSUE 5',info1:'Photography: KOVE LEE',info2:'Stylist: WOO LEE',info3:'Hair: WOOJUN KIM'},
//     {url:wow8,title:'The WOW - ISSUE 5',info1:'Photography: KOVE LEE',info2:'Stylist: WOO LEE',info3:'Hair: WOOJUN KIM'},

// ]

// export const BAZAAR =[
//     {url:bazaar1,title:"Harper's BAZAAR",info1:'Photograpy:AMY TROOST ',info2:'Stylist:VIRGINIE BENARROCH',info3:'Published: May 2022'},
//     {url:bazaar2,title:"Harper's BAZAAR",info1:'Photograpy:AMY TROOST ',info2:'Stylist:VIRGINIE BENARROCH',info3:'Published: May 2022'},
//     {url:bazaar3,title:"Harper's BAZAAR",info1:'Photograpy:AMY TROOST ',info2:'Stylist:VIRGINIE BENARROCH',info3:'Published: May 2022'},
//     {url:bazaar4,title:"Harper's BAZAAR",info1:'Photograpy:AMY TROOST ',info2:'Stylist:VIRGINIE BENARROCH',info3:'Published: May 2022'},

// ]
// export const VOGUE =[
//     {url:vogue1,title:'Vogue Korea',info1:'Photografy:HYEA W. KANG',info2:'Stylist:EUNYOUNG SOHN',info3:''},
//     {url:vogue2,title:'Vogue Korea',info1:'Photografy:HYEA W. KANG',info2:'Stylist:EUNYOUNG SOHN',info3:''},
//     {url:vogue3,title:'Vogue Korea',info1:'Photografy:HYEA W. KANG',info2:'Stylist:EUNYOUNG SOHN',info3:''},
//     {url:vogue4,title:'Vogue Korea',info1:'Photografy:HYEA W. KANG',info2:'Stylist:EUNYOUNG SOHN',info3:''},
//     {url:vogue5,title:'Vogue Korea',info1:'Photografy:HYEA W. KANG',info2:'Stylist:EUNYOUNG SOHN',info3:''},
//     {url:vogue6,title:'Vogue Korea',info1:'Photografy:HYEA W. KANG',info2:'Stylist:EUNYOUNG SOHN',info3:''},
//     {url:vogue7,title:'Vogue Korea',info1:'Photografy:HYEA W. KANG',info2:'Stylist:EUNYOUNG SOHN',info3:''},

// ]

// export const ELLE =[
//     {url:elle1,title:'A Different Side of Sora Choi',info1:'Photografy:SHARIF HAMZA',info2:'Stylist:ALEX WHITE',info3:'Published:MAR 15, 2023'},
//     {url:elle2,title:'A Different Side of Sora Choi',info1:'Photografy:SHARIF HAMZA',info2:'Stylist:ALEX WHITE',info3:'Published:MAR 15, 2023'},
//     {url:elle3,title:'A Different Side of Sora Choi',info1:'Photografy:SHARIF HAMZA',info2:'Stylist:ALEX WHITE',info3:'Published:MAR 15, 2023'},
//     {url:elle4,title:'A Different Side of Sora Choi',info1:'Photografy:SHARIF HAMZA',info2:'Stylist:ALEX WHITE',info3:'Published:MAR 15, 2023'},

// ]
// export const PERFECT =[
//     {url:perfect1,title:'Perfect',info1:'Photografy:WILLY VANDERPERRE ',info2:'',info3:''},
//     {url:perfect2,title:'Perfect',info1:'Photografy:WILLY VANDERPERRE ',info2:'',info3:''},
//     {url:perfect3,title:'Perfect',info1:'Photografy:WILLY VANDERPERRE ',info2:'',info3:''},

// ]

// https://www.wowmag.co.uk/archive/sora-choi
// https://www.harpersbazaar.com/culture/features/a39697803/0106-0113-sora-choi-on-coming-into-your-own-may-2022/
// https://forums.thefashionspot.com/threads/dazed-korea-may-2023-sora-choi-by-park-sangjun-kim-yeongjun-choi-jiwoong.410663/
// https://www.fashiongonerogue.com/editorial/sora-choi-vogue-korea-cover/