import {AddToPhotos,DeleteForever,Edit,Download,
    FileDownloadDone,FileUpload,ManageSearch,AddPhotoAlternate,Done,ContentCopy} from '@mui/icons-material';
// import "./AllPalette.css"
import styles from "./Export.module.css"


export const add= < AddToPhotos className={styles.button}/>
export const del= <DeleteForever className={styles.button}/>
export const edit= <Edit className={styles.button}/>
export const download=<Download />
export const upload=<FileUpload className={styles.button}/>
export const doneupload=<FileDownloadDone className={styles.button}/>
export const search=<ManageSearch className={styles.button}/>
export const done=<Done className={styles.button}/>
export const copy=<ContentCopy className={styles.button}/>
export const photo=<AddPhotoAlternate className={styles.button}/>