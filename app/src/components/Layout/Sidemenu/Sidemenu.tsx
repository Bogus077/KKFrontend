// eslint-disable-next-line import/named
import { SxProps } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import React, { useMemo } from 'react';
import styles from './Sidemenu.module.scss';
import GridViewIcon from '@mui/icons-material/GridView';
import GroupsIcon from '@mui/icons-material/Groups';
import PersonIcon from '@mui/icons-material/Person';
import { SidemenuItem } from './SidemenuItem';
import { useLocation, useNavigate } from 'react-router-dom';
import { frontendRoutes } from '../../../utils/router/routes';

type SidemenuTypes = {
  active?: boolean;
};

export const Sidemenu = ({ active }: SidemenuTypes) => {
  //TODO: Настроить изменение размера сайдбара
  // const [sideMenuActive, setSideMenuActive] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  const sxStyles: { [key: string]: SxProps } = useMemo(
    () => ({
      logoActive: { width: 168, height: 200 },
    }),
    []
  );

  return (
    <div className={styles.main}>
      <Avatar alt="logo" src="/logo_middle.png" sx={sxStyles.logoActive} />
      <div className={styles.menu}>
        <SidemenuItem
          active={new RegExp(frontendRoutes.index).test(location.pathname)}
          title="Панель управления"
          icon={<GridViewIcon />}
          onClick={() => navigate(frontendRoutes.index)}
        />
        <SidemenuItem
          active={new RegExp(frontendRoutes.kids.list).test(location.pathname)}
          title="Участники"
          icon={<PersonIcon />}
          onClick={() => navigate(frontendRoutes.kids.list)}
        />
        <SidemenuItem
          active={new RegExp(frontendRoutes.teams.list).test(location.pathname)}
          title="Команды"
          icon={<GroupsIcon />}
          onClick={() => navigate(frontendRoutes.teams.list)}
        />
      </div>
    </div>
  );
};
