package app.servlets;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Statement;

/**
 * Created by Сергей on 29.09.2018.
 */
public class AllItemsServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        RequestDispatcher requestDispatcher = req.getRequestDispatcher("/allitems.html");
        requestDispatcher.forward(req, resp);    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String enteredItemName = req.getParameter("itemName");
        String enteredCountItem = req.getParameter("countItem");
        String c = req.getParameter("string");
        PrintWriter out = resp.getWriter();
        out.println(c);


    }
}
