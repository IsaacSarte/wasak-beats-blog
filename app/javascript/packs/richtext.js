document.addEventListener('turbolinks:load', () => {

    console.log('Hello from richtext js');

    let hideEditorBtn = document.querySelector('.hide-editor')
    let addLyricsBtn = document.querySelector('.add-lyrics-btn')
    let richTextArea = document.querySelector('.rich-form')

    let openEditorBtn = document.querySelector('.open-editor')
    openEditorBtn.style.display = 'none'

    let editorFooter = document.querySelector('.edit-footer')

    hideEditorBtn.addEventListener('click', () => {
        console.log('Hide Editor Button Clicked')
        addLyricsBtn.style.display = 'none'
        richTextArea.style.display = 'none'
        openEditorBtn.style.display = 'initial'

        const phoneQuery = window.matchMedia("(max-width: 639px)")

        if (phoneQuery.matches) {
            editorFooter.style.cssText = `
                position: relative;
        `;
        } else {
            editorFooter.style.cssText = `
            position: fixed;
            bottom: 0;
            max-width: 100%;
            width: 100%;
        `;
        }
    })

    openEditorBtn.addEventListener('click', () => {
        console.log('Open Editor Button Clicked')
        openEditorBtn.style.display = 'none'
        addLyricsBtn.style.display = 'initial'
        richTextArea.style.display = 'block'
        editorFooter.style.position = 'relative'
    })
})
