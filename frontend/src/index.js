import { CreateShortUrlController } from "./controllers/create-short-url-controller"
import { ListOriginalUrlController } from "./controllers/list-original-url-controller"
import { getShortCodeFromPath } from "./utils/get-short-code-from-path"
import { validateUrlProtocol } from "./utils/validate-url-protocol"

const urlForm = document.getElementById('urlForm')
const urlInput = document.getElementById('urlInput')
const urlOutput = document.getElementById('urlOutput')
const shortUrlOutput = document.getElementById('shortUrlOutput')
const copyButton = document.getElementById('copyButton')
const shortUrlLink = document.getElementById('shortUrlLink')
const loadingContainer = document.getElementById('loadingContainer')

async function redirectToShortUrl() {
    const shortCode = getShortCodeFromPath()

    if (!shortCode) {
        return
    }

    try {
        loadingContainer.classList.remove('hidden')

        const originalUrl = await new ListOriginalUrlController()
            .handle(import.meta.env.VITE_API_URL, shortCode)

        if (!originalUrl || !validateUrlProtocol(originalUrl)) {
            loadingContainer.classList.add('hidden')
            return
        }

        window.location.replace(originalUrl)

    } catch (error) {
        console.error('Failed to redirect: Unable to fetch or process the original URL', error)
        loadingContainer.classList.add('hidden')
    }
}

redirectToShortUrl()

urlForm.addEventListener("submit", async function createShortUrl(event) {
    event.preventDefault()

    if (!urlInput.value) {
        alert("Please enter a valid URL")
        return
    }

    const originalUrl = urlInput.value
    const shortUrl = await new CreateShortUrlController()
        .handle(import.meta.env.VITE_API_URL, originalUrl)

    if (!shortUrl) {
        alert("Error: Failed to create short URL. Please try again later.")
        return
    }

    shortUrlOutput.value = shortUrl
    shortUrlLink.href = shortUrl
    shortUrlLink.textContent = shortUrl
    urlOutput.classList.remove('hidden')
    urlInput.value = ''
})

copyButton.addEventListener("click", async function copyUrl() {
    const shortUrl = shortUrlOutput.value

    if (!shortUrl) {
        return
    }

    navigator.clipboard.writeText(shortUrl)

    copyButton.innerText = "Copiado"

    const COPY_BUTTON_CHANGE_DELAY_IN_MS = 300
    setTimeout(() => {
        copyButton.innerText = "Copiar"
    }, COPY_BUTTON_CHANGE_DELAY_IN_MS)
})

