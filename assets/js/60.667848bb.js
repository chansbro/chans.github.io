(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{413:function(t,s,a){"use strict";a.r(s);var n=a(25),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"vuetify-대신에-tailwindcss를-사용하게-된-계기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuetify-대신에-tailwindcss를-사용하게-된-계기"}},[t._v("#")]),t._v(" Vuetify 대신에 tailwindcss를 사용하게 된 계기")]),t._v(" "),a("p",[t._v("현재 Vue 혹은 Nuxt로 프로젝트를 진행하면서 가장 많이 사용하는 컴포넌트 프레임워크 (i.e. 재사용 가능한 컴포넌트들의 모음집)로는 단연 "),a("code",[t._v("Vuetify")]),t._v("가 꼽힙니다.\n저 역시 작년에 개인적으로 진행하던 프로젝트에 "),a("code",[t._v("Vuetify")]),t._v("를 적용하여 빠르게 웹 어플리케이션을 만든 경험이 있는데요.")]),t._v(" "),a("p",[t._v("앱을 만드는데 필요한 색 변경/모양 변경/레이아웃 변경 등과 같은 대부분의 중요한 기능들이 "),a("code",[t._v("Vuetify")]),t._v(" 프레임워크 전용 엘리먼트인 "),a("code",[t._v("v-dialog")]),t._v(", "),a("code",[t._v("v-card")]),t._v(" 등을 사용하여 매우 빠르게 제작이 가능하다는 것이 가장 큰 장점 같습니다.\n개발자가 굳이 번거롭게 몇몇 UI 컴포넌트들을 만들어야 할 수고를 덜어주는 셈이지요.")]),t._v(" "),a("p",[t._v("하지만, 프로젝트에 직접 "),a("code",[t._v("Vuetify")]),t._v("를 사용하다보니 단점도 느껴졌습니다.")]),t._v(" "),a("p",[t._v("가장 크게 느껴졌던 단점은 프레임워크에서 제공하는 "),a("strong",[t._v("컴포넌트를 개별적으로 커스터마이즈 하거나 새로운 컴포넌트를 제작하는 것이 불편")]),t._v(" 합니다. 더 나은 방법도 있었겠지만, 저는 빨리 만들려고 하다보니까 vue 파일의 "),a("code",[t._v("<style>")]),t._v(" 태그안에 HTML 엘리먼트 별로 적용하였습니다. 아래는 제가 사용했던 방법의 예시입니다.")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#recorded_dialog_title")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-family")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'SCDream5'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Roboto'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sans-serif"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 16px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".theme--dark.v-expansion-panels .v-expansion-panel")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #282828"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-family")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'SCDream2'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Roboto'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sans-serif"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #ffffff"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("커스터마이즈 관련된 단점을 빼고나면 크게 단점이라고 부를 것도 없습니다. 하지만 최근 "),a("code",[t._v("tailwindcss")]),t._v("라는 새로운 low-level CSS 프레임워크가 급부상하고 있고, 2020년에는 새로운 기술 스택을 배우고 싶었던 마음도 겹쳐 다음 프로젝트에는 "),a("code",[t._v("tailwindcss")]),t._v("를 적용하기로 결정했습니다.")]),t._v(" "),a("h2",{attrs:{id:"tailwindcss-간단-소개"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tailwindcss-간단-소개"}},[t._v("#")]),t._v(" "),a("code",[t._v("tailwindcss")]),t._v(" 간단 소개")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://chansnotes.github.io/images/tailwind/trend.png",alt:"tailwind trend"}})]),t._v(" "),a("p",[a("code",[t._v("tailwindcss")]),t._v("를 간단히 소개하자면, 커스터마이즈 성향이 매우 강한 low-level 수준의 CSS 프레임워크라고 생각하시면 됩니다.\n좀 더 쉽게 풀자면, 기존에 CSS style 태그에서 id 혹은 class 속성으로 지정하여 디자인을 해야하던 귀찮음을 없애주는 좋은 친구입니다 😃")]),t._v(" "),a("p",[t._v("예를 들어, 특정 "),a("code",[t._v("<img>")]),t._v(" 태그의 스타일을 변경하고자 할 때, 기존의 방식으로는 아래와 같이 코드를 작성해야 합니다 (Vue 기준).")]),t._v(" "),a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("#myclass"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("scoped")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token style"}},[a("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#myclass")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" solid black"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("style을 분리하는 것에 장점도 있지만, CSS를 처음부터 전부 작성하려면 "),a("code",[t._v("style")]),t._v(" 태그 안의 내용이 굉장히 길어지게 됩니다.\n거기다가 화면 크기 별로 추가적인 스타일 변경이 필요하다면...? 와우...\n이럴 바엔 그냥 "),a("code",[t._v(".css")]),t._v(" 파일을 하나 따로 만드는 것이 더 나은 방법이 아닌가 싶네요 ㅎㅎ")]),t._v(" "),a("p",[t._v("이러한 단점을 없애주는 것이 바로 "),a("code",[t._v("tailwindcss")]),t._v("라고 생각하시면 됩니다. 장황하고 긴 CSS 스타일 코딩을 하지 않게 도와주는 것이지요.\n위의 코드는 아래의 tailwind 스타일 코드로 아주 간결하게 변경이 가능합니다! 정말 간결하죠~?")]),t._v(" "),a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("h-full border border-black"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("글을 작성한 날을 기준으로 "),a("code",[t._v("tailwindcss")]),t._v("는 현재 npm에서 stars 수와 다운로드 수가 비교적 꾸준히 증가하는 추세를 보여줍니다.\n아직 커뮤니티 활성화 수준이 매우 낮지만, 개인적인 느낌으로는 "),a("code",[t._v("Vuetify")]),t._v("만큼 성장 가능성이 있다고 생각됩니다.\n만들어진 기본 컴포넌트를 사용하려면 "),a("code",[t._v("Vuetify")]),t._v("를!\n자유자재로 직접 만들려면 "),a("code",[t._v("tailwindcss")]),t._v("를! 이런 느낌으로요 ㅎㅎ")]),t._v(" "),a("p",[t._v("여담이지만 현재 진행 중인 프로젝트를 마치면, "),a("code",[t._v("tailwindcss")]),t._v("와 "),a("code",[t._v("Vuepress")]),t._v("를 같이 사용하여 지금 사용 중인 Jekyll Git Blog도 싹 다 개편을 할 계획입니다.\n다만, 그 시기가 언제가 될지 아무도 모릅니다... 껄껄")]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("아래에서는 "),a("code",[t._v("nuxt")]),t._v(" 프로젝트에 "),a("code",[t._v("tailwindcss")]),t._v("를 설치하고 적용하는 방법을 설명하려고 합니다.\n"),a("code",[t._v("nuxt")]),t._v(" 프로젝트를 기반으로 하기 때문에, "),a("code",[t._v("nuxt")]),t._v("를 설치하고 난 다음에 "),a("code",[t._v("yarn create nuxt-app <your_ProjectName>")]),t._v("으로 새로운 프로젝트 폴더를 만든 상태에서 시작해주세요!")]),t._v(" "),a("p",[t._v("주의할 점은 프로젝트 시작 과정에서 "),a("code",[t._v("CSS Framework")]),t._v("를 "),a("code",[t._v("TailwindCss")]),t._v("로 선택해주셔야 합니다!")]),t._v(" "),a("h2",{attrs:{id:"tailwindcss-설치하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tailwindcss-설치하기"}},[t._v("#")]),t._v(" tailwindcss 설치하기")]),t._v(" "),a("p",[a("code",[t._v("nuxt")]),t._v(" 프로젝트 시작하는 방법으로 tailwindcss의 설치는 매우 손쉽게 진행할 수 있습니다.\n시작을 위한 폴더 생성이 모두 완료되면 아래의 과정을 진행하시면 됩니다.")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("tailwind.css")]),t._v(" 파일 만들기")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("tailwind")]),t._v("에서는 기본으로 제공하는 directive들이 있습니다. 기본 directive들을 사용하기 위해, 아래처럼 "),a("code",[t._v("root_folder/assets/css")]),t._v(" 위치에 "),a("code",[t._v("tailwind.css")]),t._v(" 파일을 생성해주세요.")])]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tailwindcss/base'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tailwindcss/components'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tailwindcss/utilities'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[a("code",[t._v("tailwind.config.js")]),t._v(" 파일 만들기")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("tailwind.config.js")]),t._v(" 파일은 기본으로 제공하는 테마, 플러그인등의 기능들을 변경하거나 확장하고 싶을 때에 사용됩니다.")]),t._v(" "),a("li",[t._v("있는게 없는 것 보다 나으니, 일단 아래의 내용을 복사하여 프로젝트 폴더의 루트에 "),a("code",[t._v("tailwind.config.js")]),t._v(" 파일을 만들어 줍시다.")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// tailwind.config.js")]),t._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  theme"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  variants"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[a("code",[t._v("nuxt.config.js")]),t._v(" 파일 변경")])]),t._v(" "),a("ul",[a("li",[t._v("tailwind 쪽에서의 설정을 완료했으면, 이제 "),a("code",[t._v("nuxt")]),t._v(" 앱의 설정을 담당하는 "),a("code",[t._v("nuxt.config.js")]),t._v("파일을 수정해서 CSS 처리를 Tailwind로 진행하도록 변경해줘야 합니다 (이를 PostCss라고 부릅니다).\n"),a("ul",[a("li",[t._v("사실 "),a("RouterLink",{attrs:{to:"/categories/vueTailwind/tailwindcss.com/docs/installation/"}},[t._v("공식문서 페이지")]),t._v("의 4번에서 "),a("strong",[t._v("Webpack")]),t._v(" 부분과 비슷합니다.")],1)])])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("변경해야하는 부분!")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("css")])]),t._v(" "),a("li",[a("code",[t._v("buildModules")])]),t._v(" "),a("li",[a("code",[t._v("build")])])])])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// nuxt.config.js")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  mode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'universal'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  head"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    title"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("npm_package_name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    meta"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" charset"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'utf-8'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'viewport'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" content"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'width=device-width, initial-scale=1'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        hid"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'description'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'description'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        content"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("npm_package_description "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    link"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" rel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'icon'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'image/x-icon'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" href"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/favicon.ico'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  loading"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" color"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#fff'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  css"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'~assets/css/tailwind.css'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'~plugins/tui-editor.client.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  buildModules"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@nuxtjs/eslint-module'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@nuxtjs/tailwindcss'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  modules"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@nuxtjs/axios'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@nuxtjs/pwa'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@nuxtjs/dotenv'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@nuxtjs/auth'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  build"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    postcss"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        tailwindcss"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./tailwind.config.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("extend")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ctx")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h4",{attrs:{id:"끝"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#끝"}},[t._v("#")]),t._v(" 끝")]),t._v(" "),a("p",[t._v("여기까지 완료하면, "),a("code",[t._v("nuxt")]),t._v(" 앱에서 "),a("code",[t._v("tailwindcss")]),t._v("를 자유자재로 사용할 수 있게 됩니다.\n기본으로 제공하는 기능들이 부족하다고 느껴진다면, "),a("code",[t._v("tailwind.config.js")]),t._v(" 파일의 "),a("code",[t._v("theme")]),t._v(" 안에 "),a("code",[t._v("extend")]),t._v("로 추가하면 됩니다. 자세한 설명은 추후에 정리하도록 하겠습니다.")])])}),[],!1,null,null,null);s.default=e.exports}}]);