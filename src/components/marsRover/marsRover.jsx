import React, {useEffect, useState} from "react";
import s from './marsRover.module.css'
import m from './marsRoverMedia.module.css'
import common from '../../helpers/commonStyles/commonStyles.module.css'
import form from '../../helpers/formHelpers/formsStyles.module.css'
import cn from 'classnames'
import {useDispatch, useSelector} from "react-redux";
import {getMarsRoverPhotos, roverNextPage, roverPrevPage} from "../../reducers/marsRover";
import Preloader from "../../helpers/preloaders/preloader";
import ParamsPickerROVER from "./paramsPickerROVER/paramsPickerROVER";
import {Redirect} from "react-router-dom";
import { MdNavigateBefore } from 'react-icons/md';
import { MdNavigateNext } from 'react-icons/md';
import {setNewError} from "../../reducers/errors";
import imagePlaceHolder from "../../images/imagePlaceholder.jpg";
import LazyLoad from 'react-lazyload'
import ModalWindow from "../../helpers/modalWindow/modalWindow";

const MarsRover = () => {
    const dispatch = useDispatch()
    const marsRoverPhotos = useSelector(state => state.marsRover.marsRoverPhotos)
    const rover = useSelector(state => state.marsRover.rover)
    const date = useSelector(state => state.marsRover.date)
    const page = useSelector(state => state.marsRover.page)
    const searchStart = useSelector(state => state.library.searchStart)
    const error = useSelector(state => state.errors.error)

    const [modalWindow, setModalWindow] = useState(false)
    const [modalSrc, setModalSrc] = useState(``)

    const [params, setParams] = useState(false)
    const setParameters = () => {
        params
            ? setParams(false)
            : setParams(true)
    }

    useEffect(()=>{
        dispatch(getMarsRoverPhotos(rover, date, page))
        window.scrollTo(0, 0)
    },[dispatch, rover, date, page])

    useEffect(()=>{
        dispatch(setNewError(null))
    },[dispatch])


    if(searchStart) return <Redirect to='/nasaLibrary'/>

    return (
        <div className={s.marsRover}>
           <h1 className={common.title}>Image Data Gathered By NASA's Rovers On Mars</h1>

            {!params &&
            <button className={form.formOpenButton} onClick={setParameters}>Set parameters</button>}

            {params && <div>
                <button className={form.formOpenButton} onClick={setParameters}>Close parameters</button>
                <ParamsPickerROVER setParams={setParams}/>
            </div>}

            {error && <h3 className={common.errorCase}>Not available, please change date</h3>}

            {marsRoverPhotos.length === 0 && !error &&
            <Preloader/>}

            {marsRoverPhotos.length !== 0 && !error &&
            <div>
                <div className={s.items}>
                    {
                        marsRoverPhotos.map(r => <div className={cn(s.item, m.item)} key={r.id}>
                            <LazyLoad height={300}>
                                <div>
                                    <p className={s.params}>Rover: {r.rover.name}</p>
                                    <p className={s.params}>Status: {r.rover.status}</p>
                                    <p className={s.params}>Camera name: {r.camera.full_name}</p>
                                    <p className={s.params}>Earth date: {r.earth_date}</p>
                                    <div className={s.imageHolder}>
                                        <img className={s.image}
                                             src={r.img_src}
                                             alt="roverPhoto"
                                             onClick={ (e) => {
                                                 setModalWindow(true)
                                                 setModalSrc(e.currentTarget.src)
                                             }}
                                             onError={ (e) => {e.target.src = imagePlaceHolder}}/>
                                    </div>
                                </div>
                            </LazyLoad>



                        </div>)
                    }

                    {modalWindow &&
                    <ModalWindow active={modalWindow} setActive={setModalWindow}>
                        <img className={cn(common.modalImage)}
                             src={modalSrc}
                             alt="modal"/>
                    </ModalWindow>}

                </div>
                <div className={s.buttonsHolder}>
                    {
                        page > 1 &&
                        <button className={s.pageButton}
                                onClick={ () => {dispatch(roverPrevPage())} }>
                            <MdNavigateBefore/>
                        </button>
                    }

                    <button className={s.pageButton}
                            onClick={ () => {dispatch(roverNextPage())} }>
                        <MdNavigateNext />
                    </button>
                </div>
            </div>}
        </div>
    )
}

export default MarsRover