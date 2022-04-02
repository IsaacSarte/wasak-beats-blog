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
