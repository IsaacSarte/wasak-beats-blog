// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

require("trix")
require("@rails/actiontext")

// go to songs page
let loginPage = document.getElementsByClassName("loginReload")
loginPage.onclick = () => {
    window.location.href = '/writers/songs'
};

let reloadPage = document.getElementsByClassName("sign-up")
reloadPage.onclick = () => {
    window.location.href = '/writers/posts'
};

document.addEventListener('turbolinks:load', () => {
    let hideEditorBtn = document.querySelector('.hide-editor')
    let addLyricsBtn = document.querySelector('.add-lyrics-btn')
    let richTextArea = document.querySelector('.rich-form')

    let openEditorBtn = document.querySelector('.open-editor')
    openEditorBtn.style.display = 'none'

    hideEditorBtn.addEventListener('click', () => {
        console.log('Hide Editor Button Clicked')
        addLyricsBtn.style.display = 'none'
        richTextArea.style.display = 'none'
        openEditorBtn.style.display = 'initial'
    })

    openEditorBtn.addEventListener('click', () => {
        console.log('Open Editor Button Clicked')
        openEditorBtn.style.display = 'none'
        addLyricsBtn.style.display = 'initial'
        richTextArea.style.display = 'block'
    })
})