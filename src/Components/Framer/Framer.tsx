import {motion} from "framer-motion";
import parallax from './img/parallax.jpg'

const AnimationBlocks = {
    hidden: {
        y: -200,
        opacity: 0
    },
    visible: (custom: number) => ({
        y: 0,
        opacity: 1,
        transition: {delay: custom * 0.4}
    })
}

const AnimationLabel = {
    hidden: {
        x: -200,
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {delay: 0.5}
    }
}


function Framer() {
    return (
        <div className='bg-fixed bg-center bg-cover' style={{
            backgroundImage: `url(${parallax})`
        }}>
            <motion.div initial='hidden' whileInView='visible' viewport={{amount: 0.2, once: true}}
                        className='flex justify-between text-black dark:text-white'>
                <motion.div variants={AnimationBlocks} custom={1}
                            className='bg-gray-300 w-96 h-80 dark:bg-gray-900 rounded-lg mt-40 ml-40 p-8'>
                    Сегодня в мире IT очень важно иметь свой сайт портфолио, который будет отображать все ваши
                    профессиональные достижения и навыки. Большинство работодателей очень внимательно относится к этому
                    аспекту, так как это позволяет им более быстро и эффективно принимать решения о том, нужен ли им
                    данный специалист или нет.
                </motion.div>
                <motion.div variants={AnimationBlocks} custom={2}
                            className='bg-gray-300 w-96 h-80 dark:bg-gray-900 rounded-lg mt-64 p-8'>
                    Сайт портфолио является не только вашим визитной карточкой, но и местом, где вы можете
                    продемонстрировать свои работы, разобраться в своем профессиональном росте и показать все свои
                    навыки и опыт работы. На вашем сайте портфолио должна быть подробная информация о вас и ваших
                    работах, а также контакты для связи с вами. Он должен быть удобным для использования и иметь ясную
                    структуру.
                </motion.div>
                <motion.div variants={AnimationBlocks} custom={3}
                            className='bg-gray-300 w-96 h-80 dark:bg-gray-900 rounded-lg mt-96 mr-40 p-8'>
                    Выбирая дизайн сайта портфолио, не забывайте, что он должен соответствовать вашим профессиональным
                    качествам и стилю проектов, над которыми вы работали. Не стоит использовать яркие цвета и
                    флеш-анимацию. В целом, ваш сайт портфолио должен иметь простой и сдержанный дизайн, который сделает
                    его более профессиональным и понятным для использования.
                </motion.div>
            </motion.div>
            <motion.div initial='hidden' whileInView='visible' viewport={{amount: 0.2, once: true}}
                        className='dark:bg-gray-900 bg-gray-300 mt-48 w-full h-96 p-8 text-black dark:text-white text-3xl flex items-center'>
                <motion.span variants={AnimationLabel}>Наконец, не забывайте, что ваш сайт портфолио является вашим
                    персональным брендом и должен соответствовать вашим профессиональным целям и амбициям. Разработайте
                    свое портфолио с учетом всех этих факторов, и вы сможете убедить работодателей в своей квалификации
                    и профессиональной компетентности.
                </motion.span>
            </motion.div>
            <div>
                <motion.div initial='hidden' whileInView='visible' viewport={{amount: 0.2, once: true}}
                            className='flex justify-between text-black dark:text-white mt-64 mx-40'>
                    <motion.div variants={AnimationBlocks} custom={1}
                                className='bg-gray-300 w-96 h-80 dark:bg-gray-900 rounded-lg p-8'>
                        1. Шаг первый – выбор платформы для создания сайта. Можно использовать популярные CMS, такие как
                        WordPress, Joomla или другие. Также можно использовать специализированные сервисы, например, Wix
                        или
                        Squarespace. 2. Шаг второй – выбор дизайна сайта. Необходимо выбрать дизайн, который будет
                        соответствовать вашей профессии и стилю работы.
                    </motion.div>
                    <motion.div variants={AnimationBlocks} custom={2}
                                className='bg-gray-300 w-96 h-80 dark:bg-gray-900 rounded-lg p-8'>
                        3. Шаг третий – создание меню и навигации на сайте. Необходимо определить, какие категории будут
                        на
                        вашем сайте и как они будут отображаться в меню. Не забудьте добавить страницу «Обо мне» с
                        информацией о себе и вашем опыте работы.
                        4. Шаг четвертый – добавление контента на сайт. Необходимо добавить фотографии, видео, тексты и
                        другие материалы.
                    </motion.div>
                    <motion.div variants={AnimationBlocks} custom={3}
                                className='bg-gray-300 w-96 h-80 dark:bg-gray-900 rounded-lg p-8'>
                        5. Шаг пятый – оптимизация сайта для поисковых систем. Необходимо оптимизировать каждую страницу
                        сайта для поисковых систем, чтобы повысить шансы на его высокую позицию в поисковой выдаче.
                        6. Шаг шестой – публикация сайта. После того, как сайт готов, его необходимо опубликовать и
                        приступить к продвижению.
                    </motion.div>
                </motion.div>
            </div>
            <motion.div initial='hidden' whileInView='visible' viewport={{amount: 0.2, once: true}}
                        className='bg-gray-300 dark:bg-gray-900 mt-40 w-full h-52 p-8 text-black dark:text-white text-3xl flex items-center'>
                <motion.span variants={AnimationLabel}> После того, как вы создадите свой сайт портфолио, не забудьте
                    постоянно обновлять его новыми работами и материалами. Это поможет вам привлечь больше клиентов и
                    повысить свою репутацию в вашей профессиональной среде.
                </motion.span>
            </motion.div>
            <div>
                <motion.div variants={AnimationBlocks} custom={4} className='flex justify-center items-center'>
                    <motion.div initial='hidden' whileInView='visible' viewport={{amount: 0.2, once: true}}
                                className='bg-gray-300 dark:bg-gray-900 rounded-lg w-[800px] h-80 mt-40 p-8 text-black dark:text-white text-lg flex items-center'>
                        <motion.span variants={AnimationLabel}> Языки программирования и среды разработки, которые
                            используются frontend
                            разработчиками, могут включать:
                            Языки программирования:
                            - HTML
                            - CSS
                            - JavaScript
                            - TypeScript
                            Среды разработки:
                            - Visual Studio Code
                            - WebStorm
                            - Sublime Text
                            - Atom
                            - Adobe Dreamweaver
                            Также могут использоваться библиотеки и фреймворки, такие как: React, Angular, Vue.js.
                        </motion.span>
                    </motion.div>
                </motion.div>
            </div>
            <div className='bg-gray-300 dark:bg-gray-900 mt-40 w-full h-20 p-8'>
                <span
                    className="block bg-gray-300 dark:bg-gray-900 text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a
                    href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
            </div>
        </div>

    )
}

export default Framer