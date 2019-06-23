import React from 'react'
import s from './MainBlock.module.scss'
import image from '../../static/volk_stiker_art_137738_1600x900.jpg'

class MainBlock extends React.Component {
    render() {
        return (
            <div className={s.container}>
                <div className={s.row}>
                    <div className={s.col1}>
                        <div className={s.img} style={{ backgroundImage: `url(${image})` }}/>
                    </div>
                    <div className={s.col2}>
                        <div className={s.title}>Денис</div>
                        <div className={s.status}>ученик</div>
                        <div className={s.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dapibus
                            velit ac arcu mattis fermentum. Suspendisse sit amet quam pulvinar, interdum leo et, lacinia
                            ligula. Ut turpis tortor, dapibus ut tristique et, mollis vel elit. Praesent id venenatis
                            elit, nec finibus lectus. Nam efficitur, mi sed mattis maximus, elit lectus viverra enim, ut
                            suscipit augue velit ac sapien. Fusce ac sollicitudin purus, sit amet sagittis mauris.
                            Quisque ex tortor, ultrices eu ullamcorper a, volutpat quis nulla. Donec dapibus tellus id
                            malesuada tempor. Vestibulum placerat dictum venenatis. Morbi bibendum lobortis venenatis.
                            Sed mattis tellus sapien, eu malesuada justo molestie a. Vestibulum vestibulum blandit
                            viverra. Pellentesque sed bibendum nibh. Proin tincidunt porta nisl, non congue diam. Nullam
                            vestibulum turpis metus, nec accumsan elit dictum ac.
                        </div>
                        <ul>
                            <li>Данил</li>
                            <li>Денис</li>
                            <li>Ярик</li>
                            <li>Ваня</li>
                        </ul>

                    </div>

                </div>
            </div>
        )
    }
}

export default MainBlock
