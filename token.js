import org.tron.trident.core.ApiWrapper;
import org.tron.trident.proto.Response.TransactionExtention;

public class DeployContract {

    public static void main(String[] args) throws Exception {

        String privateKey = "YOUR_PRIVATE_KEY";

        ApiWrapper client = ApiWrapper.ofMainnet(privateKey);

        String abi = new String(
            java.nio.file.Files.readAllBytes(
                java.nio.file.Paths.get("HelloTron.abi")
            )
        );

        String bytecode = new String(
            java.nio.file.Files.readAllBytes(
                java.nio.file.Paths.get("HelloTron.bin")
            )
        );

        TransactionExtention tx = client.deployContract(
            "HelloTron",
            abi,
            bytecode,
            null,
            0,
            100_000_000L,
            100
        );

        System.out.println("TXID: "
            + tx.getTxid().toStringUtf8());

        client.close();
    }
}