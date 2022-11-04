import React from "react";
import { Link, useParams } from "react-router-dom";

import {
  Groups2TwoTone,
  AccessTimeRounded,
  SettingsOutlined,
  DeleteOutlineOutlined,
} from "@mui/icons-material";
import { red } from "@mui/material/colors";
const color = red[900];

export default function Item({ item, deleteItem }) {
  const { id } = useParams();
  return (
    <div className="item item__grid">
      <img className="item-img" src={item.img} alt="img" />
      <div className="desc">
        <h2>{item.title}</h2>
        <p>
          <Groups2TwoTone fontSize="medium" /> {item.director}
        </p>
        <p>
          <AccessTimeRounded fontSize="small" /> {item.duration} min
        </p>

        <p className="item__price">{item.price}$</p>
       
          <Link
            className="_link"
            value={item.id}
            to={`/itemDetails/${item.id}`}
          >
            Show film
          </Link>
      
        <div className="edit-btns">
          <Link to={`/itemDetails/${item.id}/edit`}>
            <div className="edit">
              <SettingsOutlined color="success" />
            </div>
          </Link>
          <div className="delete" onClick={() => deleteItem(item.id)}>
            <DeleteOutlineOutlined sx={{ color }} />
          </div>
        </div>
      </div>
    </div>
  );
}
