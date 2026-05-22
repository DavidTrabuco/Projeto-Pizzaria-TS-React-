import { useState } from "react";

export default function useHome() {
    const [showBanner, setShowBanner] = useState(true);

    const closeBanner = () => setShowBanner(false);

    return { showBanner, closeBanner };
}
