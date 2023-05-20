import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { New } from '../pages/New'
import { MoviePreview } from '../pages/MoviePreview'
import { Profile } from '../pages/Profile'

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/moviepreview" element={<MoviePreview />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
    )
}