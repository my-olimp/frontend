import { Tdiscipline, disciplines } from '@/store/features/auth-slice'
import { useState, useEffect } from 'react'

export default function useDisciplineColor(type: Tdiscipline) {
    const [color, setColor] = useState<string>('')

    useEffect(() => {  
        if (disciplines.t.includes(type)) {
            setColor('linear-gradient(170deg, #5E96FF -16.72%, #1F68F0 91.75%)')
        } else if (disciplines.s.includes(type)) {
            setColor('linear-gradient(180deg, #FF6F79 0%, #FF2C3A 100%)')
        } else if (disciplines.e.includes(type)) {
            setColor('linear-gradient(180deg, #35E75B 0%, #09C231 100%)')
        } else if (disciplines.g.includes(type)) {
            setColor('linear-gradient(180deg, #F97C46 0%, #FD6727 100%)')
        } else if (disciplines.l.includes(type)) {
            setColor('linear-gradient(180deg, #7248E9 0%, #4710E3 96.87%')
        } else if (disciplines.p.includes(type)) {
            setColor('linear-gradient(180deg, #7248E9 0%, #4710E3 96.87%)')
        }
    }, [])

    return color;
}