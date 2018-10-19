package app.servlets;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Created by Сергей on 04.10.2018.
 */
@WebServlet("/myapp/buyService")
public class BuyService extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
// All response status is defined in the HttpServletResponse class. We
        // can then use these constants value to return process status to the
        // browser.
        resp.setContentType("text/html");

        // Let say this servlet only handle request for page name inputForm. So
        // when user request for other page name error page not found 404 will
        // be returned, other wise it will be 200 which mean OK.
        String page = req.getParameter("page");
        if (page != null && page.equals("inputForm")) {
            resp.setStatus(HttpServletResponse.SC_OK);
        } else {
            resp.sendError(HttpServletResponse.SC_NOT_FOUND, "The requested page ["
                    + page + "] not found.");
        }    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doPost(req, resp);
    }
}
