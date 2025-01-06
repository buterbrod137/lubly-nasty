import Glassmorphism from '@/components/glassmorphism'
import MainGradient from '@/components/main-gradient'
import Stickers from '@/components/stickers'
import TopFrame from '@/components//top-frame'
import Frames from '@/components/frames'

import '@/style/frame.css'
import '@/style/top-frame.css'

export default function page() {

    return (
        <>
            <MainGradient />
            <Glassmorphism />
            
            <Stickers />
            <TopFrame />

            <Frames />
        </>
    )

}