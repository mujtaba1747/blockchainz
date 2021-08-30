package blog

import (
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/example/blog/x/blog/keeper"
	"github.com/example/blog/x/blog/types"
)

// NewHandler ...
func NewHandler(k keeper.Keeper) sdk.Handler {
	// this line is used by starport scaffolding # handler/msgServer

	return func(ctx sdk.Context, msg sdk.Msg) (*sdk.Result, error) {
		ctx = ctx.WithEventManager(sdk.NewEventManager())
		switch msg := msg.(type) {
		// this line is used by starport scaffolding # 1
		case *types.MsgCreatePost:
			return handleMsgCreatePost(ctx, k, msg)
		case *types.MsgCreateAuction:
			return handleAuctionCreatePost(ctx, k, msg)
		case *types.MsgCreateBid:
			return handleAuctionCreateBid(ctx, k, msg)
		case *types.MsgFinalizeAuction:
			return handleFinalizeAuction(ctx, k, msg)
		default:
			errMsg := fmt.Sprintf("unrecognized %s message type: %T", types.ModuleName, msg)
			return nil, sdkerrors.Wrap(sdkerrors.ErrUnknownRequest, errMsg)
		}
	}
}
