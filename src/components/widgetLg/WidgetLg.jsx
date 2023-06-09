import React from "react";
import "./widgetLg.css";
const WidgetLg = () => {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">
        <table className="widgetLgTable">
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Data</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://images.pexels.com/photos/878358/pexels-photo-878358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Susan Carol</span>
            </td>

            <td className="widgetLgDate">2 Jun 2021</td>
            <td className="widgetLgDate">$122.00</td>
            <td className="widgetLgDate">
              <Button type="Approved" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://images.pexels.com/photos/878358/pexels-photo-878358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Susan Carol</span>
            </td>

            <td className="widgetLgDate">2 Jun 2021</td>
            <td className="widgetLgDate">$122.00</td>
            <td className="widgetLgDate">
              <Button type="Declined" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://images.pexels.com/photos/878358/pexels-photo-878358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Susan Carol</span>
            </td>

            <td className="widgetLgDate">2 Jun 2021</td>
            <td className="widgetLgDate">$122.00</td>
            <td className="widgetLgDate">
              <Button type="Pending" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://images.pexels.com/photos/878358/pexels-photo-878358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Susan Carol</span>
            </td>

            <td className="widgetLgDate">2 Jun 2021</td>
            <td className="widgetLgDate">$122.00</td>
            <td className="widgetLgDate">
              <Button type="Approved" />
            </td>
          </tr>
        </table>
      </h3>
    </div>
  );
};

export default WidgetLg;
