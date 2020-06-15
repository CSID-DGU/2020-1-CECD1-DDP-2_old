import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import './index.css';

function DocumentInfo({ profile, name, dept }) {
    return (
        <div className="DocumentInfo">
            <img className="DocumentImg" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAnFBMVEX////vQDbW1tfyKhv/8/PvJxf83tzwLyHuLyL/z83vOzDvPjTU3+DpcmzxNinvRz/5xcP2op/xamP86OfuHwrye3XuMibvNyz/+vn5wr7z7+7+9fPydG3sAADtGQD2pJ/1lY/71tPwUUre3Nv9trPp5eXZycninJnT09Xcvr3e5ufqbWb70c385uTxZV33rKjzhoDwWlH1m5X4urcI6ZOwAAAELElEQVR4nO3cfXeaMBjGYRFiIumqVUZwaKvObm5Ta+v3/25LeOlsdS3bTB5g9++vHTrjroMPCDul00EIIYQQQgghhND/VrLo244WeKO4sFz0OSEEToX0bHfd7X4iA664dV8mXJMRB/b3YCbsdu9pgAlzAMyFa5phDHxnQk2k+KS6FNIMo1thd+1+GB0LCYbRtdD9MDoXdl2f/CmEboeRQuh2GEmEmpi2XOhyGMmEzoaRTOhsGOmEroaRUOhoGGmFLoaRVqg/qW0Xdtdd28cbaqH9YayB0PINnDoI1/c2P6l1ENo9+ddCaHUY6yK0R6yN0NrJ342Qf6lAtDSMjvbh16v3iZY+qW6EMqwCtEN0I/TCXaWdaGMYHQk9tfx2VaXvjRV6kg9+fKjQqLFCM4xVihosrBaDEEIIyYMQQgjpgxBCCOmDEEII6YMQQgjpgxBCCOmDEEII6YMQQgjpgxBCCOmDEEII6YMQQgjpgxBCCOmD0LpQ6s5uvNTDmEiFijOuQhkKX4TltlBwJpSUYezzODxiSp8dJRohVPPNOEiTJAm2hynLjeF00ss3psFiNRVxaZSD8XH9ykRKIR8evW68izP13YvV0odYlcIXP+hVfhtqYbLYDPu97JVTY1E3Rms2LsbZ1mQkzgm3jRFOZkIIxowre9KbEQYzX2/kUTzPkPv4Wfh4GxVVfxdq4TB7Qp/k5jdbDnEuTItHvkkVPZklR2EpHIVvLFdrof536D8H/KXQ/JWpWdI8iLHxQrXXr9XnwFdCj5sjz5NqgTDcdbJBfC30blN95PHbIDQfR++MMDt9aHrjhQaSipM51PRHvehcNV4oI/1h3JweafRPrvWid4VwF6uihgn1acF8vZmGZ4QeD/R55DoXrm7KqhPJhbOIRWxvTu0Tgz0jHGdnypffaZLqD7qlFuoD5TbIXjjMXG/vw181SVi8bJ+zTucw7vyaw/nHsuqHHGrheKsvhfRlkl8M1qnQyPblkUaVv91b+U3IhcOZ7zN9qVtuOz0fzvWiyxacD38rZIv8C2trheFSr/kQt1coI3N17LXh2uK8ULKJXvLOXOW3UihFuOmUt2RaJQxm+utnzG+XD2bBbX67rVXCpH9YrSaL/EGWkyi/n9hYYf+M8KjFrlyukUJxCILJqzu76iktnu6UjofzAXsmyUEQpE0Teorzk6sgJeRgqRsoc3P/6AdScPEXQPr/mTlNFv3rOkU1FF44CCGEkD4IIYSQPgghhJA+CCGEkD4IIYSQPgghhJA+CCGEkD4IIYSQPgghhJA+CCGEkD4IIYSQPgghhJA+CCGEkD4IIYSQPgghhJA+CCGEkD4I/7iEvf+mLpP+pYXmSSt1KnsQ3GU71Gsnsv7FhZ09r89elGx+eWCns/J4XRocbAB121492lryIYQQQgghhBBCqMb9BJmwuPcI0a7uAAAAAElFTkSuQmCC"/>
            <p className="text">Object Storage의 이해와 활용</p>
            <p className="text">10.2MB</p>
        </div>
    )
}

DocumentInfo.propTypes = {

}

export default DocumentInfo;