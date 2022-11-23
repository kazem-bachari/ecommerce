import { Link } from "react-router-dom";
import {motion} from 'framer-motion'
export default function IconBadge({Icon,path,number=0}) {
  return (
    <div>

      <motion.div whileHover={{scale:.8}} className="block overflow-hidden px-1">
        <Link to={path} className="relative">
          <p className="absolute  rounded-lg bg-black text-white px-1 -top-0 -right-1">{number}</p>
          <Icon  className="text-2xl "  />
        </Link>
     </motion.div>
    </div>
  )
}
