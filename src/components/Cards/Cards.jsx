import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { followUser, unFollowUser } from "../../redux/slice";
import { useFollowUserMutation } from "../../redux/userApi";
import css from "../Main/Main.module.css";
import { user } from "../../redux/selectors";

export const Cards = ({ user: { id, avatar, tweets, followers } }) => {
  const [isFollowed, setIsFollowed] = useState(false);
  const [putUser] = useFollowUserMutation();
  const [foll, setFoll] = useState(followers);
  const dispatch = useDispatch();
  const users = useSelector(user);

  const onFollow = async (id) => {
    setFoll(foll + 1);
    const followed = () => ({
      followers: followers + 1,
    });
    const body = followed();

    putUser({ body, id });
    dispatch(followUser(id));
    setIsFollowed(true);
  };

  const unFollow = async (id) => {
    setFoll(foll - 1);
    const unFollowed = () => ({
      followers: followers - 1,
    });

    const body = unFollowed();

    putUser({ body, id });
    dispatch(unFollowUser(id));
    setIsFollowed(false);
  };

  useEffect(() => {
    users.includes(id) ? setIsFollowed(false) : setIsFollowed(true);
  }, [users, isFollowed, id]);

  return (
    <li className={css.item}>
      <div className={css.logo}></div>
      <div className={css["box-top"]}></div>
      <div className={css["box-middle"]}></div>
      <div className={css["avatar-box"]}>
        <img className={css.img} src={avatar} alt="avatar" />
      </div>
      <div className={css["box-bottom"]}>
        <p className={css.tweets}>{tweets} TWEETS</p>
        <p className={css.followers}>
          {String(foll).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} FOLLOWERS
        </p>
        {isFollowed ? (
          <button
            onClick={() => {
              onFollow(id);
            }}
            className={css["btn-follow"]}
          >
            FOLLOW
          </button>
        ) : (
          <button
            onClick={() => {
              unFollow(id);
            }}
            className={css["btn-unfollow"]}
          >
            FOLLOWING
          </button>
        )}
      </div>
    </li>
  );
};
